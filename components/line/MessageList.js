import React from "react";
import styled from "styled-components";

const StyledMessage = styled.li``;
const Message = ({ message }) => (
  <StyledMessage>Message {message.id}</StyledMessage>
);

const StyledMessageList = styled.ul`
  flex-grow: 1;
`;

const MessageList = ({ members, messages }) => {
  console.log("members", members);
  return (
    <StyledMessageList>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </StyledMessageList>
  );
};

export default MessageList;
