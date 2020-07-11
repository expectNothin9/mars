import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--background-mask);
`;

const Loading = () => <StyledLoading />;

export default Loading;
