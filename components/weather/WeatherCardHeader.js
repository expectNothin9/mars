import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment-timezone";

import FASIcon from "../common/FASIcon";

const StyledWeatherCardHeader = styled.header`
  text-align: center;
  margin-bottom: var(--space-md);

  h2 {
    font-size: 1.25rem;
    color: var(--mono-dark);
  }
  h2 i {
    margin-right: var(--space-sm);
    color: var(--mono-light);
  }
  time {
    display: block;
    margin-top: var(--space-xs);
    font-size: 0.75rem;
  }
`;

const getCurrentTime = (timezone = "Asia/Taipei") => {
  const currentTime = moment();
  return currentTime.tz(timezone).format("h:mm A z");
};

const WeatherCardHeader = ({ location, timezone }) => {
  const [time, setTime] = useState(getCurrentTime(timezone));
  // FIXME: Warning: Can't perform a React state update on an unmounted component.
  useEffect(() => {
    setInterval(() => {
      setTime(getCurrentTime(timezone));
    }, 60 * 1000);
  });
  return (
    <StyledWeatherCardHeader>
      <h2>
        <FASIcon name="location-arrow" />
        {location}
      </h2>
      <time>{time}</time>
    </StyledWeatherCardHeader>
  );
};

export default WeatherCardHeader;
