import gql from "graphql-tag";

export const typeDefs = gql`
  scalar JSON

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
    isSelf: Boolean!
  }
  type Message {
    id: String!
    senderId: String!
    type: String!
    value: MessageValue!
    sentTime: String! # ISO-8601 yyyy-MM-dd'T'HH:mm:ssZ
  }
  type MessageValue {
    content: String
  }

  type Query {
    weather(location: String!): Weather!
    chatroom(chatroomId: String!): Chatroom!
    redis(key: String!): JSON
  }

  type Error {
    code: Int!
    message: String!
  }

  type SaveChatroomSubjectResponse {
    chatroomId: String!
    subject: String
    error: Error
  }

  type Mutation {
    saveChatroomSubject(
      chatroomId: String!
      subject: String!
    ): SaveChatroomSubjectResponse!
    setRedis(key: String!, value: String!): JSON
  }
`;
