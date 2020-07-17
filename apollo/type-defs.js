import gql from "graphql-tag";

export const typeDefs = gql`
  type Weather {
    location: String!
    timezone: String!
    condition: String!
    brief: String!
    temperature: Temperature!
  }
  type Temperature {
    current: Int!
    highest: Int
    lowest: Int
  }

  type Chatroom {
    id: String!
    subject: String!
    members: [ChatroomMember!]!
    messages: [Message!]!
  }
  type ChatroomMember {
    id: String!
    nickname: String!
  }
  type Message {
    id: String!
    senderId: String!
    type: String!
    value: MessageValue!
  }
  type MessageValue {
    content: String
  }

  type Query {
    weather(location: String!): Weather!
    chatroom(chatroomId: String!): Chatroom!
  }
`;
