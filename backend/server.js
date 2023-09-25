const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

async function startServer() {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  const uri = "mongodb+srv://beyondfinds2023:marketplace2023@cluster0.iil9f3d.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("DB has connected Successfully");
  app.listen(8080, () => {
    console.log("App is running at port 8080!!!");
  });
}

startServer();
