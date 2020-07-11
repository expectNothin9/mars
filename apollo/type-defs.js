import gql from "graphql-tag";

export const typeDefs = gql`
  type Weather {
    location: String!
    status: String!
    brief: String!
    temperature: Temperature!
  }
  type Temperature {
    current: Int!
    highest: Int
    lowest: Int
  }
  type Query {
    weather(location: String!): Weather!
  }
`;
