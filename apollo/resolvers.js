export const resolvers = {
  Query: {
    f2eSince: async (_parent, _args, _context, _info) => {
      return Promise.resolve("2019");
    },
  },
};
