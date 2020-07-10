import { ApolloServer } from "apollo-server-micro";

import { schema } from "../../apollo/schema";

const apolloServer = new ApolloServer({ schema });

// for next.js to leave body parser to apollo server
export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
