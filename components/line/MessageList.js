import React from "react";
import styled from "styled-components";
import clz from "classnames";

import { formatTime } from "../../lib/momentUtil";

const StyledSenderAvatar = styled.div`
  --avatar-unit: 2.5rem;
  width: var(--avatar-unit);
  height: var(--avatar-unit);
  line-height: var(--avatar-unit);
  text-align: center;
  border-radius: 50%;
  background: var(--mono-light);
  margin: 0 var(--space-sm);
`;
const SenderAvatar = ({ sender }) => (
  <StyledSenderAvatar className="avatar">
    {sender.nickname.substring(0, 1)}
  </StyledSenderAvatar>
);

const StyledSenderNickname = styled.div`
  font-size: 0.75rem;
  margin-left: var(--space-sm);
  margin-bottom: var(--space-xs);
`;
const SenderNickname = ({ sender }) => (
  <StyledSenderNickname className="nickname">
    {sender.nickname}
  </StyledSenderNickname>
);

const StyledMesasgeContent = styled.div`
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--mono-light);
  border-radius: var(--space-md);
`;
const MesasgeContent = ({ message }) => (
  <StyledMesasgeContent>{message.value.content}</StyledMesasgeContent>
);

const StyledMessageReadTime = styled.div`
  font-size: 0.75rem;
  margin: 0 var(--space-sm) var(--space-sm);
  display: flex;
  align-items: flex-end;
`;
const MessageReadTime = ({ message }) => (
  <StyledMessageReadTime>{formatTime(message.sentTime)}</StyledMessageReadTime>
);

const StyledMessage = styled.li`
  display: flex;
  padding: var(--space-sm) 0;

  &.is-self {
    flex-direction: row-reverse;

    .avatar {
      display: none;
    }
    .message-content-box {
      margin-right: var(--space-sm);
      .nickname {
        display: none;
      }
    }
  }
`;
const Message = ({ members, message }) => {
  const sender = members.find((member) => member.id === message.senderId);
  return (
    <StyledMessage className={clz({ "is-self": sender.isSelf })}>
      <SenderAvatar sender={sender} />
      <div className="message-content-box">
        <SenderNickname sender={sender} />
        <MesasgeContent message={message} />
      </div>
      <MessageReadTime message={message} />
    </StyledMessage>
  );
};

const StyledMessageList = styled.ul`
  flex-grow: 1;
  margin: 0;
  padding: 0;
`;

const MessageList = ({ members, messages }) => (
  <StyledMessageList>
    {messages.map((message) => (
      <Message key={message.id} members={members} message={message} />
    ))}
  </StyledMessageList>
);

export default MessageList;
