import React from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";

const mapWeatherConditionToIconName = (condition) => {
  let iconName;
  // https://openweathermap.org/weather-conditions
  switch (condition) {
    case "01d":
      iconName = "sun";
      break;
    case "01n":
      iconName = "moon";
      break;
    case "02d":
      iconName = "cloud-sun";
      break;
    case "02n":
      iconName = "cloud-moon";
      break;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      iconName = "cloud";
      break;
    case "09d":
    case "09n":
      iconName = "cloud-showers-heavy";
      break;
    case "10d":
      iconName = "cloud-sun-rain";
      break;
    case "10n":
      iconName = "cloud-moon-rain";
      break;
    case "11d":
    case "11n":
      iconName = "bolt";
      break;
    case "13d":
    case "13n":
      iconName = "snowflake";
      break;
    case "50d":
    case "50n":
      iconName = "smog";
      break;
    default:
      iconName = "question";
  }
  return iconName;
};
const StyledWeatherIcon = styled.div`
  i {
    width: 10rem;
    height: 10rem;
    text-align: center;
    line-height: 10rem;
    font-size: 8rem;
    color: var(--mono-dark);
  }
`;

const WeatherIcon = ({ condition }) => {
  const iconName = mapWeatherConditionToIconName(condition);
  return (
    <StyledWeatherIcon>
      <FASIcon name={iconName} />
    </StyledWeatherIcon>
  );
};

export default WeatherIcon;
