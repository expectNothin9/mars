export const resolvers = {
  Query: {
    weather: async (_parent, { location }, { dataSources }, _info) => {
      const weather = await dataSources.weatherAPI.getWeather({ location });
      return weather;
    },
  },
};
