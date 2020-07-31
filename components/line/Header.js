import React, { useContext } from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";
import { PopupModalContext } from "../common/PopupModal";
import EditChatroomSubjectForm from "./EditChatroomSubjectForm";

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

const StyledChatroomSubject = styled.div`
  flex-grow: 1;
  font-size: 1.25rem;
  line-height: var(--h-unit);
  display: flex;

  p {
    margin: 0;
    word-break: break-all;
  }
  span {
    margin-left: var(--space-sm);
  }
`;
const ChatroomSubject = ({
  chatroomId = "DEFAULT_CHATROOM_ID",
  subject = "DEFAULT_SUBJECT",
  members = [],
}) => {
  const { setPopupModal } = useContext(PopupModalContext);
  return (
    <StyledChatroomSubject>
      <p
        onClick={() =>
          setPopupModal({
            active: true,
            content: (
              <EditChatroomSubjectForm
                chatroomId={chatroomId}
                subject={subject}
              />
            ),
          })
        }
      >
        {subject}
      </p>
      {members.length > 2 && <span>({members.length})</span>}
    </StyledChatroomSubject>
  );
};

const StyledHeader = styled.header`
  height: var(--h-unit);
  display: flex;
`;
const Header = ({
  chatroomId = "DEFAULT_CHATROOM_ID",
  subject = "DEFAULT_SUBJECT",
  members = [],
}) => (
  <StyledHeader>
    <BackButton />
    <ChatroomSubject
      chatroomId={chatroomId}
      subject={subject}
      members={members}
    />
    <SearchButton />
    <DialButton />
    <MenuButton />
  </StyledHeader>
);

export default Header;
