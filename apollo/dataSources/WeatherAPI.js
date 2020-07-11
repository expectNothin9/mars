const { RESTDataSource } = require("apollo-datasource-rest");

const API_KEY = process.env.WEATHER_API_KEY;
class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://api.openweathermap.org/data/2.5/";
  }

  async getWeather({ location }) {
    const resp = await this.get("weather", {
      q: "Taipei",
      APPID: API_KEY,
      units: "metric",
    });

    // TODO: move to weatherReducer.js
    const { timezone: tzOffset, weather, main } = resp;
    let timezone;
    switch (tzOffset) {
      case 28800:
        timezone = "Asia/Taipei";
        break;
      default:
        timezone = undefined;
    }

    return {
      location: location,
      timezone,
      condition: weather[0].icon,
      brief: weather[0].description,
      temperature: {
        current: Math.round(main.temp),
        highest: Math.ceil(main.temp_max),
        lowest: Math.floor(main.temp_min),
      },
    };
  }
}

module.exports = WeatherAPI;
