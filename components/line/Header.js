import React from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";

const StyledButton = styled.button`
  width: calc(var(--h-unit) + 0.75rem);
  height: var(--h-unit);
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  i {
    font-size: 1.5rem;
  }
`;

const BackButton = () => (
  <StyledButton>
    <FASIcon name="chevron-left" />
  </StyledButton>
);

const SearchButton = () => (
  <StyledButton>
    <FASIcon name="search" />
  </StyledButton>
);

const DialButton = () => (
  <StyledButton>
    <FASIcon name="phone-alt" />
  </StyledButton>
);

const MenuButton = () => (
  <StyledButton>
    <FASIcon name="bars" />
  </StyledButton>
);

const StyledChatroomTitle = styled.div`
  flex-grow: 1;
  font-size: 1.25rem;
  line-height: var(--h-unit);
`;
const ChatroomTitle = ({ title = "Chatroom Title", memberCount = 9 }) => (
  <StyledChatroomTitle>
    {title} ({memberCount})
  </StyledChatroomTitle>
);

const StyledHeader = styled.header`
  height: var(--h-unit);
  display: flex;
`;
const Header = () => (
  <StyledHeader>
    <BackButton />
    <ChatroomTitle />
    <SearchButton />
    <DialButton />
    <MenuButton />
  </StyledHeader>
);

export default Header;
