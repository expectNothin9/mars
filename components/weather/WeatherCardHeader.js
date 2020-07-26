import React, { useState, useEffect } from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";
import { getCurrentTime } from "../../lib/momentUtil";

const StyledWeatherCardHeader = styled.header`
  text-align: center;
  margin-bottom: var(--space-md);

  h2 {
    font-size: 1.25rem;
    color: var(--txt-primary);
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

const timeFormat = "h:mm A z";
const WeatherCardHeader = ({ location, timezone }) => {
  const [time, setTime] = useState(getCurrentTime(timeFormat, timezone));
  // FIXME: Warning: Can't perform a React state update on an unmounted component.
  useEffect(() => {
    setTimeout(() => {
      setTime(getCurrentTime(timeFormat, timezone));
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
