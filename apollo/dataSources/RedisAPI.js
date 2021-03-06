const { DataSource } = require("apollo-datasource");
const Redis = require("ioredis");

const UNEXPECTED_SYSTEM_ERROR = {
  code: 999999,
  message: "UNEXPECTED_SYSTEM_ERROR",
};

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

  async lineGet(key) {
    return await this.get(`line.${key}`);
  }

  async lineGetChatroom(chatroomId) {
    const resp = await this.lineGet(chatroomId);
    return JSON.parse(resp);
  }

  async lineGetChatroomMembers(chatroomId) {
    const resp = await this.lineGet(`${chatroomId}.members`);
    return JSON.parse(resp);
  }

  async lineGetChatroomMessages(chatroomId) {
    const resp = await this.lineGet(`${chatroomId}.messages`);
    return JSON.parse(resp);
  }

  async lineSet(key, value) {
    return await this.set(`line.${key}`, value);
  }

  async lineSetChatroom(chatroomId, chatroom) {
    const resp = await this.lineSet(chatroomId, JSON.stringify(chatroom));
    return resp === "OK"
      ? { chatroomId, chatroom }
      : { chatroomId, error: UNEXPECTED_SYSTEM_ERROR };
  }
}

module.exports = RedisAPI;
