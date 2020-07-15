import React from "react";
import styled from "styled-components";

import SystemBar from "./SystemBar";
import Header from "./Header";
import Announcement from "./Announcement";
import MessageList from "./MessageList";
import Footer from "./Footer";

const StyledLine = styled.main`
  min-width: 20rem;
  max-width: 30rem;
  border-left: 1px solid var(--mono-light);
  border-right: 1px solid var(--mono-light);
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;

  --h-unit: 2.25rem;
`;

const Line = () => (
  <StyledLine>
    <SystemBar />
    <Header />
    <Announcement />
    <MessageList />
    <Footer />
  </StyledLine>
);

export default Line;
