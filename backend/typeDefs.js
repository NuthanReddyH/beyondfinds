const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUserByUsername(username: String!): User
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!, confirmPassword: String!): User
  }
`;

module.exports = typeDefs;
