import React from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";

const StyleTemperature = styled.div`
  font-weight: bold;

  p {
    display: inline-block;
    margin: 0;
    margin-right: var(--space-sm);
  }
  p i {
    margin-right: var(--space-xs);
  }
  p.current {
    display: block;
    margin-top: var(--space-sm);
    color: var(--txt-primary);
  }
  p.current em {
    display: inline-block;
    font-style: normal;
    font-size: 6rem;
    height: 6rem;
    line-height: 6rem;
  }
  p.current span {
    display: inline-block;
    vertical-align: top;
    font-size: 3.5rem;
  }

  @media (max-width: 767px) {
    p.current em {
      font-size: 3.75rem;
      height: 3.75rem;
      line-height: 3.75rem;
    }
    p.current span {
      display: inline-block;
      vertical-align: top;
      font-size: 2rem;
    }
  }
`;

const Temperature = ({ current, highest, lowest }) => (
  <StyleTemperature>
    {highest && (
      <p className="highest">
        <FASIcon name="long-arrow-alt-up" />
        {highest}º
      </p>
    )}
    {lowest && (
      <p className="lowest">
        <FASIcon name="long-arrow-alt-down" />
        {lowest}º
      </p>
    )}
    <p className="current">
      <em>{current}</em>
      <span>º</span>
    </p>
  </StyleTemperature>
);

export default Temperature;
