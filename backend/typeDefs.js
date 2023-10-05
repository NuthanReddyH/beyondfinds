const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUser(username: String!, password: String!): User
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!, confirmPassword: String!): User
  }
`;

module.exports = typeDefs;
