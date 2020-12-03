import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";

const StyledButton = styled.button`
  width: var(--h-unit);
  height: var(--h-unit);
  margin: 0;
  padding: 0;
  background: var(--mono-light);
  border: none;

  i {
    font-size: 1rem;
  }
`;

const ToggleButton = () => (
  <StyledButton>
    <FASIcon name="chevron-down" />
  </StyledButton>
);

const StyledAnnouncementContent = styled.div`
  flex-grow: 1;
  display: flex;
  background: var(--mono-light);

  i {
    width: var(--h-unit);
    height: var(--h-unit);
    font-size: 1rem;
    text-align: center;
    line-height: var(--h-unit);
  }
  p {
    margin: 0;
    font-size: 1rem;
    line-height: var(--h-unit);
  }
`;
const AnnouncementContent = ({ title }) => (
  <StyledAnnouncementContent>
    <FASIcon name="bullhorn" />
    <p>{title}</p>
  </StyledAnnouncementContent>
);
AnnouncementContent.propTypes = {
  title: PropTypes.string.isRequired,
};

const StyledAnnouncement = styled.header`
  height: var(--h-unit);
  display: flex;
`;
const Announcement = ({ title }) => (
  <StyledAnnouncement>
    <AnnouncementContent title={title} />
    <ToggleButton />
  </StyledAnnouncement>
);
Announcement.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Announcement;
