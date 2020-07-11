import React from "react";
import styled from "styled-components";

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
  }
`;

const WeatherCardHeader = ({ location, timezone }) => (
  <StyledWeatherCardHeader>
    <h2>
      <FASIcon name="location-arrow" />
      {location}
    </h2>
    <time>2:02 PM {timezone}</time>
  </StyledWeatherCardHeader>
);

export default WeatherCardHeader;
