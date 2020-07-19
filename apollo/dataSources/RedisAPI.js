const { DataSource } = require("apollo-datasource");
const Redis = require("ioredis");

const REDIS_URL = process.env.REDIS_URL;
const redis = new Redis(REDIS_URL);

class RedisAPI extends DataSource {
  constructor() {
    super();
    this.redis = redis;
  }

  async get(key) {
    let resp;
    try {
      resp = await this.redis.get(key);
      // resp === null if not found
    } catch (e) {
      console.log("[ERROR] RedisAPI get exception", e);
    }
    return resp;
  }

  async set(key, value) {
    let resp;
    try {
      resp = await this.redis.set(key, value);
      // resp === 'OK' if success
    } catch (e) {
      console.log("[ERROR] RedisAPI set exception", e);
    }
    return resp;
  }
}

module.exports = RedisAPI;
