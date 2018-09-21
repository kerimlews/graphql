const { prisma } = require('./prisma-client/index')
const { GraphQLServer } = require('graphql-yoga')
var jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    findUsers(root, args, context) {
      return context.prisma.users()
    },
    findUser(root, args, context) {
      return context.prisma.users({ where: { id: args.id } })
    },
    publishedPosts(root, args, context) {
      return context.prisma.posts({ where: { published: true } })
    },
    post(root, args, context) {
      return context.prisma.post({ id: args.postId })
    },
    postsByUser(root, args, context) {
      return context.prisma.user({
        id: args.userId
      }).posts()
    }
  },
  Mutation: {
    createDraft(root, args, context) {
      return context.prisma.createPost(
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
      return context.prisma.updatePost(
        {
          where: { id: args.postId },
          data: { published: true },
        },

      )
    },
    createUser(root, args, context) {
      return context.prisma.createUser(
        { name: args.name },
      )
    }
  },
  User: {
    posts(root, args, context) {
      return context.prisma.user({
        id: root.id
      }).posts()
    }
  },
  Post: {
    author(root, args, context) {
      return context.prisma.post({
        id: root.id
      }).author()
    }
  }
}

function checkToken(token) {

  if (token === null)
    return false;
  return true;
}

async function getUser(token) {
  if (!checkToken(token))
    return null;

  return await new Promise(resolve =>
    jwt.verify(token, 'mysecret', (err, result) => {
      if (err)
        resolve(null)
      else
        resolve(prisma.users({ where: { id: result.id } }))
    })
  );
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: ({ request }) => ({
      prisma,
      user: getUser(request.headers.authorization)
  	})
})
server.start(() => console.log('Server is running on http://localhost:4000'))