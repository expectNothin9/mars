export const resolvers = {
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
          },
          {
            id: "bob",
            nickname: "Bob",
          },
        ],
        messages: [
          {
            id: "0",
            senderId: "Alice",
            type: "text",
            value: { content: "Hello." },
          },
          {
            id: "1",
            senderId: "Bob",
            type: "text",
            value: { content: "Hi, Alice." },
          },
        ],
      });
    },
  },
};
