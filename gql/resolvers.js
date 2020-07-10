export default {
  Query: {
    sayHello: async (_, __, context) => {
      return Promise.resolve("Hello World!");
    },
  },
};
