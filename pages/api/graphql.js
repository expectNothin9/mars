import { ApolloServer } from "apollo-server-micro";

import { schema } from "../../apollo/schema";
import WeatherAPI from "../../apollo/dataSources/WeatherAPI";
import RedisAPI from "../../apollo/dataSources/RedisAPI";

const apolloServer = new ApolloServer({
  schema,
  dataSources: () => ({
    weatherAPI: new WeatherAPI(),
    redisAPI: new RedisAPI(),
  }),
});

// for next.js to leave body parser to apollo server
export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
