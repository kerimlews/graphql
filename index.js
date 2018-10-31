const { prisma } = require('./prisma-client/index')
const { GraphQLServer } = require('graphql-yoga')
const { createError } = require('apollo-errors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const resolvers = {
  Query: {
    checkToken(root, args, context) {
      return context.user != null
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
  Mutation: {
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
  console.log(token, token == null, typeof token)

  var result = await jwt.verify(token, 'mysecret');
  console.log(result)
  if (result == null)
    return null;

  var user = prisma.users({ where: { id: result.id } });

  return user;
    
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: async ({ request }) => ({
      user: await getUser(request.headers.authorization)
  	})
})

server.start(() => console.log('Server is running on http://localhost:4000'))