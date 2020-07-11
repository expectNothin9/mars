import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import FASIcon from "../common/FASIcon";
import Loading from "../common/Loading";
import WeatherCardHeader from "./WeatherCardHeader";
import Temperature from "./Temperature";

const StyledWeatherCard = styled.section`
  margin: var(--space-lg);
  padding: var(--space-md) var(--space-lg) var(--space-lg);
  box-sizing: border-box;
  max-width: 36rem;
  flex-grow: 1;
  border: 1px solid var(--mono-light);
  border-radius: var(--space-sm);

  .weather-card-body {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
  }
  .weather-card-body > figure {
    flex-basis: 10rem;
    text-align: right;
  }
  .weather-card-body > div {
    flex-grow: 1;
  }
  figcaption {
    display: none;
  }
  figure i {
    width: 10rem;
    height: 10rem;
    text-align: center;
    line-height: 10rem;
    font-size: 10rem;
    color: var(--mono-dark);
  }
  .brief {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--mono-dark);
    margin: 0;
  }
`;

const GET_WEATHER = gql`
  query weather($location: String!) {
    weather(location: $location) {
      location
      status
      brief
      temperature {
        current
        highest
        lowest
      }
    }
  }
`;

const defaultWeather = {
  location: "---",
  status: "question",
  brief: "unknown",
  temperature: {
    current: 0,
    highest: 0,
    lowest: 0,
  },
};

const WeatherCard = ({ location }) => {
  const { data, loading } = useQuery(GET_WEATHER, { variables: { location } });
  const weather = data?.weather || defaultWeather;
  return (
    <StyledWeatherCard>
      <WeatherCardHeader location={location} timezone="CST" />
      <div className="weather-card-body">
        <figure>
          <figcaption>Current weather icon of {location}</figcaption>
          <FASIcon name={weather.status} />
        </figure>
        <div>
          <p className="brief">{weather.brief}</p>
          <Temperature
            current={weather.temperature.current}
            highest={weather.temperature.highest}
            lowest={weather.temperature.lowest}
          />
        </div>
      </div>
      {loading && <Loading />}
    </StyledWeatherCard>
  );
};

export default WeatherCard;
