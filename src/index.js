import { error, success } from "consola";
import { gql, ApolloServer } from "apollo-server-express";
import colors from "colors";
import express from "express";
import mongoose from "mongoose";
import * as AppModels from "./models";
import { DB, PORT, IN_PROD } from "./config";
import { typeDefs, resolvers } from "./graphql";

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: IN_PROD,
    context: {
      ...AppModels,
    },
  });
  const app = express();
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    success({
      badge: true,
      message: `Successfully connected with the Database`.yellow.bold,
    });
    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });

    app.listen(PORT, () => {
      success({
        badge: true,
        message: `Server started on PORT:${PORT}${server.graphqlPath}`.green
          .bold,
      });
    });
  } catch (error) {
    error({ badge: true, message: error.message });
  }
}

startApolloServer(typeDefs, resolvers);
