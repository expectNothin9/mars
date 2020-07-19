import GraphQLJSON from "graphql-type-json";

export const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    weather: async (_parent, { location }, { dataSources }, _info) => {
      const weather = await dataSources.weatherAPI.getWeather({ location });
      return weather;
    },
    chatroom: async (_parent, { chatroomId }, _context, _info) => {
      console.log(`resolve Query chatroom with chatroomId: ${chatroomId}`);
      return Promise.resolve({
        id: chatroomId,
        subject: "Chatroom Subject",
        members: [
          {
            id: "alice",
            nickname: "Alice",
            isSelf: false,
          },
          {
            id: "bob",
            nickname: "Bob",
            isSelf: true,
          },
          {
            id: "chris",
            nickname: "Chris",
            isSelf: false,
          },
        ],
        messages: [
          {
            id: "0",
            senderId: "alice",
            type: "text",
            value: { content: "Hey, what's up." },
            sentTime: "2020-07-17T07:58:55.529Z",
          },
          {
            id: "1",
            senderId: "bob",
            type: "text",
            value: { content: "Hi, Alice." },
            sentTime: "2020-07-17T07:59:19.267Z",
          },
          {
            id: "2",
            senderId: "chris",
            type: "text",
            value: { content: "Hello, Alice." },
            sentTime: "2020-07-17T07:59:19.267Z",
          },
        ],
      });
    },
    redis: async (_parent, { key }, { dataSources }, _info) => {
      const value = await dataSources.redisAPI.get(key);
      return value;
    },
  },
  Mutation: {
    setRedis: async (_parent, { key, value }, { dataSources }, _info) => {
      const resp = await dataSources.redisAPI.set(key, value);
      return resp;
    },
  },
};
