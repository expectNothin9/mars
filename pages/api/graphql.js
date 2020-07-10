import { ApolloServer } from "apollo-server-micro";

import typeDefs from "../../gql/schema";
import resolvers from "../../gql/resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const handler = apolloServer.createHandler({ path: "/api/graphql" });

// for next.js to leave body parser to apollo server
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
