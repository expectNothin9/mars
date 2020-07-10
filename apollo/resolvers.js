export const resolvers = {
  Query: {
    sayHello: async (_parent, _args, _context, _info) => {
      return Promise.resolve("Hello World!");
    },
  },
};
