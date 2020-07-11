import React from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";

const StyledAnchorTitle = styled.h2`
  padding: var(--space-md) var(--space-xl) var(--space-lg);
  font-family: Lobster;

  a {
    position: relative;
    color: var(--mono);
    text-decoration: none;
    display: block;
  }
  a:hover {
    text-decoration: underline;
  }
  a i {
    position: absolute;
    left: calc(var(--space-xl) * -1);
    color: var(--mono-dark);
    visibility: hidden;
  }
  &:hover a i {
    visibility: visible;
  }
`;

const AnchorTitle = ({ title, hashId }) => (
  <StyledAnchorTitle>
    <a href={`#${hashId}`}>
      <FASIcon name="link" />
      {title}
    </a>
  </StyledAnchorTitle>
);

export default AnchorTitle;
