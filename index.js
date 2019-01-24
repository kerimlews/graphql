const { prisma } = require('./prisma-client/index')
const { GraphQLServer, PubSub } = require('graphql-yoga')
const { createError } = require('apollo-errors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

import ConversationModel from './Api/Models/ConversationModel';

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
    },
    async getConversations(root, args, context) {

      if(context.user == null)
        throw new Error("User not found");
      
      const { page, search } = args;

      var query = {
        first: 10,
        skip: ( page - 1 ) * 10
      }

      if (search != null)
        query = { ...query, where: { 
            user2: {
              user: {
                OR: [{
                  firstName_contains: search,
                }, {
                  lastName_contains:  search,
                }]
              }
            }  
         }
        };
   
      const conversations = await prisma.conversations(query)
        .$fragment(ConversationModel.fragment());

      await console.log(conversations);

      const { id, startedAt, user2: { user: { firstName, lastName } }, group: { name }, message: { message, isSeen, createdAt } } = conversations;
      
      const result = new ConversationModel({ startedAt, id, firstName, lastName, name, message, isSeen, createdAt  });
      return result;
    },
    async getConversation(root, args, context) {

      if(context.user == null)
        throw new Error("User not found");
      
      const { id, page } = args;

      var query = {
        first: 20,
        skip: ( page - 1 ) * 10
      }
   
      const result = await prisma.conversation({id})
        .message(query);

      await console.log(result);
      
      return result;
    },
  },
  Subscription: {
    addMessage: {
        subscribe: async (parent, args, ctx, info) => prisma.$subscribe.message({
          where: {
            mutation_in: ['CREATED', 'UPDATED']
          },
        }, info).node(),
        resolve: payload => payload
      }
  },
  Mutation: {
    async addConversation(root, args, context) {

      if(context.user == null)
        throw new Error("User not found");
      
      const { user2, message } = args;

      var conversation = {
        user: { connect: { id: context.user.id } },
        user2: { create: { user: { connect: { id: user2 } } } },
        startedAt: Date.now(),
        createdAt: Date.now(),
        message: { create: [{
          message,
          createdAt: Date.now()
        }] },
      }
   
      const conversation = await prisma.createConversation(conversation)
        .$fragment(ConversationModel.fragmentConversation())

      const result = ConversationModel.mapConversation(conversation)
      
      return result;

    },
    async addMessage(root, args, context) {

      if(context.user == null)
        throw new Error("User not found");
      
      const { id, message } = args;

      var msg = {
        message,
        conversation: { connect: { id } },
        createdAt: Date.now()
      }
   
      const result = await prisma.createMessage(msg);
      
      return result;

    },
    async getMessage(root, args, context) {

      if(context.user == null)
        throw new Error("User not found");
      
      const { user2 } = args;

      var query = {
        user2
      }

      const result = await prisma.message().user2(query);
      
      return result;

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

      await prisma.updateUser({
        data: {
          isActive: true
        },
        where: {
          id: user.id
        }
      });

      return {
        username,
        email,
        token: jwt.sign({ username, password }, 'mysecret')
      } 
    },
    async logout (root, args, context) {
      await prisma.updateUser({
        data: {
          isActive: false
        },
        where: {
          id: context.user.id
        }
      });
    },
    async registration(root, args, context) {
      const { username, password, email } = args;
      const emailExist = await prisma.user({ email });
      if (emailExist)
        throw new Error('Email aready exist')

      var salt = await bcrypt.genSaltSync(10);
      var hash = await bcrypt.hashSync(password, salt);

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
    context: async ({ request, connection }) => ({
       user: connection ? null : await getUser(request.headers.authorization)
  	})
})

server.start(() => console.log('Server is running on http://localhost:4000'))