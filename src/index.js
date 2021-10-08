import { error, success } from "consola";
import { gql, ApolloServer } from "apollo-server-express";
import colors from "colors";
import express from "express";
import { PORT, IN_PROD } from "./config";
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'


async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: IN_PROD,
    context: {},
  });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    success({
      badge: true,
      message: `Server started on PORT:${PORT}${server.graphqlPath}`.green.bold,
    });
  });
}

startApolloServer(typeDefs, resolvers);
