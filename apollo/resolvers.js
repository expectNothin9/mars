import GraphQLJSON from "graphql-type-json";

export const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    weather: async (_parent, { location }, { dataSources }) => {
      const weather = await dataSources.weatherAPI.getWeather({ location });
      return weather;
    },
    chatroom: async (_parent, { chatroomId }, { dataSources }) => {
      console.log(`resolve Query chatroom with chatroomId: ${chatroomId}`);
      const [chatroom, members, messages] = await Promise.all([
        dataSources.redisAPI.lineGetChatroom(chatroomId),
        dataSources.redisAPI.lineGetChatroomMembers(`${chatroomId}.members`),
        dataSources.redisAPI.lineGetChatroomMessages(`${chatroomId}.messages`),
      ]);
      return Promise.resolve({
        id: chatroomId,
        subject: chatroom?.subject || "Chatroom Subject",
        members: members || [
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
        messages: messages || [
          {
            id: "0",
            senderId: "alice",
            type: "text",
            value: { content: "Hey, what's up." },
            sentTime: "2020-07-17T07:52:55.529Z",
          },
          {
            id: "1",
            senderId: "bob",
            type: "text",
            value: { content: "Hi, Alice." },
            sentTime: "2020-07-17T07:53:19.267Z",
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
    redis: async (_parent, { key }, { dataSources }) => {
      const value = await dataSources.redisAPI.get(key);
      return value;
    },
  },
  Mutation: {
    saveChatroomSubject: async (
      _parent,
      { chatroomId, subject },
      { dataSources }
    ) => {
      let chatroom = await dataSources.redisAPI.lineGetChatroom(chatroomId);
      if (!chatroom) {
        chatroom = { id: chatroomId };
      }
      chatroom.subject = subject;
      const resp = await dataSources.redisAPI.lineSetChatroom(
        chatroomId,
        chatroom
      );
      return resp.error ? resp : { chatroomId, subject };
    },
    setRedis: async (_parent, { key, value }, { dataSources }) => {
      const resp = await dataSources.redisAPI.set(key, value);
      return resp;
    },
  },
};
