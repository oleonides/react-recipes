const { gql } = require('apollo-server-express')

exports.typeDefs = gql`
  type Recipe {
    _id: ID
    name: String!
    imageUrl: String
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
  }

  type User {
    _id: ID
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
  }

  type Query {
    getAllRecipes: [Recipe]
  }

  type Mutation {
    addRecipe(name: String!, description: String!, category: String!, instructions: String!, username: String): Recipe
  }
  
`;
