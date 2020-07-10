import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello: async (_, __, context) => {
      return Promise.resolve("Hello World!");
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const handler = apolloServer.createHandler({ path: "/api/graphql" });

// for next.js to leave body parser to apollo server
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
