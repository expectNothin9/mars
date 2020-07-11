import React from "react";
import styled from "styled-components";

import Profile from "./Profile";
import JobExperience from "./JobExperience";
import SkillSets from "./SkillSets";

const StyledAuthor = styled.main`
  padding-top: 4rem;
`;

const Author = () => (
  <StyledAuthor>
    <Profile />
    <JobExperience />
    <SkillSets />
  </StyledAuthor>
);

export default Author;
