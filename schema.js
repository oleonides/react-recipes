const { ApolloServer } = require("apollo-server-express");

const Recipe = require("./models/Recipe");
const User = require("./models/User");

const { typeDefs } = require("./type-defs");
const { resolvers } = require("./resolvers");

//create schema
exports.schema = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Recipe,
    User,
  },
  playground: {
    endpoint: `http://localhost:5000/graphql`,
    settings: {
      "editor.theme": "light",
    },
  },
});
