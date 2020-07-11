import React from "react";
import styled from "styled-components";

import WeatherCard from "./WeatherCard";

const StyledWeather = styled.main`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
`;

const Weather = () => (
  <StyledWeather>
    <WeatherCard location="Taipei City" />
  </StyledWeather>
);

export default Weather;
