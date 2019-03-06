const { prisma } = require('./prisma-client/index')
const { GraphQLServer, PubSub } = require('graphql-yoga')
const { createError } = require('apollo-errors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
import expoNotifications from './Infrastrucure/expoNotifications';

const ConversationModel = require('./Api/Models/ConversationModel');

var messagesNotification = [];
var timer = null;

const resolvers = {
  Query: {
    checkToken(root, args, context) {
      if (context.user == null)
        return null;
      
      return context.user;
    },
    findUsers(root, args, context) {
      if(context.user == null)
        throw new Error("User not found");
      
      const { page, search } = args;

      const query = {
        first: 10,
        skip: ( page - 1 ) * 10
      };

      if (search != null || search != '')
        query.where = { fullName_contains: search };
      
      const result = prisma.users(query)

      return result;
    },
    findUser(root, args, context) {
      return prisma.user({ id: args.id });
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
    },
    async getConversations(root, args, context) {

      if(context.user == null)
        throw new Error("User not found");
      
      const { page, search } = args;

      const id = context.user.id;

      const query = {
        first: 10,
        skip: ( page - 1 ) * 10,
        where: {
          OR: [
            { user2: { id } },
            { user: { id } }
          ]
        }
      }

      if (search != null && search != '')
        query.where = {
            user2: { fullName_contains: search }
        };

      const conversations = await prisma.conversations(query)
        .$fragment(ConversationModel.fragment());

      if (conversations.length === 0) return [];
 
      const result = conversations.map((c) => {
        const userId = context.user.id;
        const { id, startedAt, user, user2, group, message } = c;
        let userFrom = null;

        if(user2.id === userId)
          userFrom = user;
        else userFrom = user2;
        delete userFrom.id;

        return ConversationModel.mapConversations({ startedAt, id, ...userFrom, ...group, ...message  });
      });

      return result;
    },
    async getConversation(root, args, context) {

      if(context.user == null)
        throw new Error("User not found");
      
      const { id, page } = args;

      const query = {
        first: 20,
        skip: ( page - 1 ) * 10
      }
  
      const result = await prisma.conversation({ id })
        .message(query);
      
      return result;
    }
  },
  Subscription: {
    message: {
        subscribe: async (parent, args, ctx) => await prisma.$subscribe.message().node(),
        resolve: payload => payload
      }
  },
  Mutation: {
    async saveExpoToken(root, args, context) {
      if(context.user == null)
        return;

      const { token } = args;

      const query = {
        data: {
          expoToken: token
        },
        where: {
          id: context.user.id
        }
      };

      await prisma.updateUser(query);

      return token;
    },
    async addConversation(root, args, context) {
      const { user2, message } = args;
      
      if(context.user == null)
        throw new Error("User not found");
      
      const existConversation = await prisma.$exists.conversation({
        AND: [
          { user: { id: context.user.id } },
          { user2: { id: user2 } },
        ]
      });

      if(existConversation)
        throw new Error("Conversation already exist");

      var conversation = {
        user: { connect: { id: context.user.id } },
        user2: { connect: { id: user2 } },
        startedAt: new Date(),
        message: { create: [{
          message
        }] },
      };

      conversation = await prisma.createConversation(conversation)
        .$fragment(ConversationModel.fragment())

      const result = ConversationModel.mapConversation(conversation)
      
      return result;

    },
    async addMessage(root, args, context) {

      if(context.user == null)
        throw new Error("User not found");
      
      const { id, message } = args;
      let messages = [];

      const msg = {
        message,
        conversation: { connect: { id } }
      }

      const result = await prisma.createMessage(msg);

      return result;
    },
    async login(root, args, context) {
      const { email, password } = args;

      const user = await prisma.user({ email });

      if(user == null)
        return new Error('Email is invalid')

      const match = await bcrypt.compareSync(password, user.password);
      if(!match)
        return new Error('Password is invalid')
      
      const query = {
        data: {
          isActive: true
        },
        where: {
          id: user.id
        }
      };

      await prisma.updateUser(query);

      const { username, firstName, lastName } = user;

      const token = jwt.sign({ username, password }, 'mysecret');

      var response = {
        username,
        firstName,
        lastName,
        email,
        token
      };

      return response;
    },
    async logout (root, args, context) {
      if (context.user == null)
        throw new Error('User not found');

      const query = {
        data: {
          isActive: false
        },
        where: {
          id: context.user.id
        }
      };

      await prisma.updateUser(query);

      return true;
    },
    async registration(root, args, context) {
      const { username, password, email, firstName, lastName } = args;

      const existUser = await prisma.$exists.user({ username, email });

      if (existUser)
        throw new Error('Email or username aready exists')

      const salt = await bcrypt.genSaltSync(10);
      const hash = await bcrypt.hashSync(password, salt);

      const fullName = `${firstName} ${lastName}`;

      const user = {
        email,
        username,
        firstName,
        lastName,
        fullName,
        password: hash,
        isActive: true,
        lastLogin: new Date()
      };
      
      await prisma.createUser(user);
      
      const token = jwt.sign({ username, password }, 'mysecret');

      const response = {
        username,
        firstName,
        lastName,
        email,
        token
      };

      return response;
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
  console.log(token)
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
    context: async ({ request, connection }) => ({
       user: connection ? null : await getUser(request.headers.authorization)
  	})
})

server.start(() => console.log('Server is running on http://localhost:4000'))