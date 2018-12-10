const { prisma } = require('./prisma-client/index')
const { GraphQLServer, PubSub } = require('graphql-yoga')
const { createError } = require('apollo-errors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const pubsub = new PubSub();

const MESSAGE_ADDED = 'MESSAGE_ADDED';

const resolvers = {
  Query: {
    checkToken(root, args, context) {
      console.log('conext', context.user)
      if (context.user == null)
        return null;
      const { username, email } = context.user;
      return { username, email };
    },
    findUsers(root, args, context) {
      return prisma.users()
    },
    findUser(root, args, context) {
      return prisma.users({ where: { id: args.id } })
    },
    publishedPosts(root, args, context) {
      return prisma.posts({ where: { published: true } })
    },
    post(root, args, context) {
      return prisma.post({ id: args.postId })
    },
    postsByUser(root, args, context) {
      return prisma.user({
        id: args.userId
      }).posts()
    }
  },
  Subscription: {
    addMeesage: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_ADDED])
      }
  },
  Mutation: {
    async addMessage(root, args, context) {
      const { message, user2 } = args;
      var message = {
        message,
        user2,
        user: context.user,
        createdAt: new Date()
      }
      pubsub.publish(MESSAGE_ADDED, message);
      await prisma.createMessage(message)
    },
    async login(root, args, context) {
      const { email, password } = args;

      var user = await prisma.user({ email })

      if(user == null)
        return new Error('Email is invalid')

      const match = await bcrypt.compareSync(password, user.password);
      if(!match)
        return new Error('Password is invalid')
      
      const username = user.username;

      return {
        username,
        email,
        token: jwt.sign({ username, password }, 'mysecret')
      } 
    },
    async registration(root, args, context) {
      const { username, password, email } = args;
      const emailExist = await prisma.user({ email });
      if (emailExist)
        throw new Error('Email aready exist')

      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);

      await prisma.createUser({ username, password: hash, email })
    
      return {
        username,
        email,
        token: jwt.sign({ username, password }, 'mysecret')
      } 

    },
    createDraft(root, args, context) {
      return prisma.createPost(
        {
          data: {
            title: args.title,
            author: {
              connect: { id: args.userId }
            }
          },
        },

      )
    },
    publish(root, args, context) {
      return prisma.updatePost(
        {
          where: { id: args.postId },
          data: { published: true },
        },

      )
    },
    createUser(root, args, context) {
      console.log(context.user)
      return prisma.createUser(
        { username: args.username },
      )
    }
  },
  User: {
    posts(root, args, context) {
      return prisma.user({
        id: root.id
      }).posts()
    }
  },
  Post: {
    author(root, args, context) {
      return prisma.post({
        id: root.id
      }).author()
    }
  }
}

async function getUser(token) {
  if (token === 'null' || token == null)
    return null;

  var result = await jwt.verify(token, 'mysecret');
  if (result == null)
    return null;

  var user = await prisma.user({ username: result.username });

  return user;
    
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: async ({ request, connection }) => {
      if (connection) {
        return connection.context;
      } else {
       return { user: await getUser(null) }
  	}
  }
})

server.start(() => console.log('Server is running on http://localhost:4000'))