import React from "react";
import styled from "styled-components";

import AnchorTitle from "./AnchorTitle";

const StyledJobExperience = styled.section`
  max-width: 40rem;
  margin: auto;

  p {
    margin: 0 var(--space-xl) var(--space-lg);
    padding-left: var(--space-lg);
    font-size: 1.25rem;
    color: var(--mono-dark);
    border-left: 4px solid var(--mono-light);
  }
  p em {
    font-weight: bold;
    font-style: normal;
  }
`;

const JobExperience = () => {
  const hashId = "job-experience";
  return (
    <StyledJobExperience id={hashId}>
      <AnchorTitle title="Job Experience" hashId={hashId} />
      <p>
        I worked at <em>Verizon Media</em> (<em>Yahoo</em>) as a{" "}
        <em>frontend engineer</em> since 2012. Over <em>8 years experience</em>{" "}
        on developing and maintaining e-commerce web application.
      </p>
      <p>
        Becoming a <em>tech lead</em> from 2019, taking responsibility of
        resource and schedule management.
      </p>
    </StyledJobExperience>
  );
};

export default JobExperience;
