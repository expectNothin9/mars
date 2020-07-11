export const resolvers = {
  Query: {
    weather: async (_parent, { location }, _context, _info) => {
      return Promise.resolve({
        location: location,
        status: "bolt",
        brief: "Thunderstorm",
        temperature: {
          current: 36,
          highest: 37,
          lowest: 29,
        },
      });
    },
  },
};
