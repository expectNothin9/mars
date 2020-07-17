import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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

  --h-unit: 2.5rem;
`;
const GET_CHATROOM = gql`
  query chatroom($chatroomId: String!) {
    chatroom(chatroomId: $chatroomId) {
      id
      subject
      members {
        id
        nickname
        isSelf
      }
      messages {
        id
        senderId
        type
        value {
          content
        }
        sentTime
      }
    }
  }
`;
const defaultChatroom = {
  id: "DEFAULT_ID",
  subject: "DEFAULT_SUBJECT",
  members: [],
  messages: [],
};
const Line = () => {
  const { data } = useQuery(GET_CHATROOM, {
    variables: { chatroomId: "MOCKED" },
  });
  const chatroom = data?.chatroom || defaultChatroom;
  const { subject, members, messages } = chatroom;
  return (
    <StyledLine>
      <SystemBar />
      <Header subject={subject} members={members} />
      <Announcement />
      <MessageList members={members} messages={messages} />
      <Footer />
    </StyledLine>
  );
};

export default Line;
