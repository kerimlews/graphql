"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Conversation",
    embedded: false
  },
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  },
  {
    name: "Notification",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/kerimlews/dfsdfsf/dev`,
  secret: `mysecret`
});
exports.prisma = new exports.Prisma();
