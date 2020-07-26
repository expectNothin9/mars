import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";
import { getCurrentTime } from "../../lib/momentUtil";

const StyledCarrier = styled.div`
  width: 40%;
  i {
    width: var(--h-unit);
    height: var(--h-unit);
    text-align: center;
    line-height: var(--h-unit);
    vertical-align: top;
  }
`;
const Carrier = () => (
  <StyledCarrier>
    <FASIcon name="signal" />
    Carrier
  </StyledCarrier>
);

const StyledClock = styled.div`
  width: 20%;
  text-align: center;
`;
const timeFormat = "h:mm A";
const Clock = () => {
  const [time, setTime] = useState(getCurrentTime(timeFormat));
  useEffect(() => {
    setTimeout(() => {
      setTime(getCurrentTime(timeFormat));
    }, 60 * 1000);
  });
  return <StyledClock>{time}</StyledClock>;
};

const StyledBattery = styled.div`
  width: 40%;
  text-align: right;
  i {
    width: var(--h-unit);
    height: var(--h-unit);
    text-align: center;
    line-height: var(--h-unit);
    vertical-align: top;
  }
`;
const Battery = () => (
  <StyledBattery>
    <FASIcon name="battery-three-quarters" />
  </StyledBattery>
);

const StyledSystemBar = styled.section`
  --h-unit: 1.25rem;
  height: var(--h-unit);
  font-size: 0.75rem;
  line-height: var(--h-unit);
  color: var(--txt-primary);
  display: flex;
`;
const SystemBar = () => (
  <StyledSystemBar>
    <Carrier />
    <Clock />
    <Battery />
  </StyledSystemBar>
);

export default SystemBar;
