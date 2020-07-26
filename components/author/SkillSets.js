import React from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";
import AnchorTitle from "./AnchorTitle";

const StyledSkillSets = styled.section`
  max-width: 40rem;
  margin: auto;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul li {
    margin: 0;
    padding: 0 var(--space-xl);
    font-size: 1.25rem;
  }
  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: normal;
    padding-left: var(--space-xl);
    position: relative;
  }
  h3 i {
    position: absolute;
    left: 0;
    color: var(--mono-dark);
  }
  p {
    margin: var(--space-lg) 0 var(--space-lg) var(--space-xl);
    padding-left: var(--space-lg);
    border-left: 4px solid var(--mono-light);
  }
  p em {
    font-style: normal;
    font-weight: bold;
    color: var(--txt-primary);
  }
  p span {
    display: block;
    margin: var(--space-sm) 0;
    padding-left: var(--space-xl);
    position: relative;
  }
  p span i {
    position: absolute;
    left: var(--space-sm);
    color: var(--mono-light);
  }

  @media screen and (max-width: 767px) {
    ul li {
      padding: 0 var(--space-lg) var(--space-lg);
    }
    h3 i {
      left: calc(-1 * var(--space-sm));
    }
    p {
      margin: var(--space-md) 0 var(--space-md) var(--space-md);
      padding-left: var(--space-lg);
      border-left: 4px solid var(--mono-light);
    }
  }
`;

const SkillSets = () => {
  const hashId = "skill-sets";
  return (
    <StyledSkillSets id={hashId}>
      <AnchorTitle title="Skill Sets" hashId={hashId} />
      <ul>
        <li>
          <h3>
            <FASIcon name="star" />
            Solid knowledge and techniques of web development
          </h3>
          <p>
            Familiar to constructing website with <em>HTML5</em> semantic tags
            and awesome style from <em>CSS3</em>.
          </p>
          <p>
            More than 5 years experience on building <em>React</em> application.
            Also skilled at <em>Redux</em> for the state/flow control.
          </p>
          <p>
            Able to serving website via <em>Node.js</em> and experienced to
            integrate with <em>RESTful API</em> or <em>GraphQL</em>.
          </p>
          <p>
            Currently adopt <em>Next.js</em> (React framework) to take advantage
            of its
            <span>
              <FASIcon name="angle-right" />
              great <em>routing system</em>,
            </span>
            <span>
              <FASIcon name="angle-right" />
              server rendering approaches (<em>
                server-side rendering
              </em> and <em>static generation</em>),
            </span>
            <span>
              <FASIcon name="angle-right" />
              development environment (zero configuration for <em>
                Babel
              </em>{" "}
              transpiling, <em>Webpack</em> bundling).
            </span>
          </p>
          <p>
            Use <em>Github</em> for version control and understand{" "}
            <em>CI/CD workflow</em>.
          </p>
        </li>
      </ul>
    </StyledSkillSets>
  );
};

export default SkillSets;
