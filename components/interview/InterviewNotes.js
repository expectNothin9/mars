import React from "react";
import styled from "styled-components";

const QnaBox = styled.div`
  margin: var(--space-md) 0;
  border: 1px solid var(--mono-light);
  border-radius: var(--space-sm);
  padding: var(--space-md);
  color: var(--txt-primary);
  font-size: 1.25rem;
`;
const Question = styled.p`
  margin: 0;
`;
const Answer = styled.p`
  margin: var(--space-md) 0 0;
`;
const TopicBox = styled.li`
  margin-top: var(--space-xl);
  h2 {
    font-size: 1.25rem;
    font-weight: normal;
  }
`;
/* eslint-disable react/no-unescaped-entities */
const SmallTalk = () => (
  <TopicBox>
    <h2>Small talk</h2>
    <QnaBox>
      <Question>How are you doing?</Question>
      <Answer>I'm doing well, thank you. And you?</Answer>
    </QnaBox>
    <QnaBox>
      <Question>Hello Ray. Thanks so much for coming in.</Question>
      <Answer>It's my pleasure. Thanks so much for meeting with me.</Answer>
    </QnaBox>
    <QnaBox>
      <Question>Did you have any trouble finding the office?</Question>
      <Answer>
        No, the directions in the email were great. Of course, Google maps did
        his job too.
      </Answer>
    </QnaBox>
    <QnaBox>
      <Question>Did you do anything interesting over the weekend?</Question>
      <Answer>Yes. I played badminton with my college school mates.</Answer>
    </QnaBox>
    <QnaBox>
      <Question>Would you like some water or coffee before we start?</Question>
      <Answer>Sure. I would like some black coffee.</Answer>
    </QnaBox>
  </TopicBox>
);

const TellMeALittleBitAboutYourself = () => (
  <TopicBox>
    <h2>Tell me a little bit about yourself.</h2>
    <QnaBox>
      <Question>Why don't you tell me a little bit about yourself.</Question>
      <Answer>
        Of course, I graduated from National Taiwan University in 2010 with a
        master degree in Information Management. I've been working at Yahoo for
        8 years as a front-end engineer. The company name changed to Verizon
        Media becuase of the acquisition. During these 8 years, I focused on
        developing and maintaining e-commerce websites. And I accumulated lots
        of skills and experience on web development, from old-school style (YUI)
        to modern style, like React.
      </Answer>
    </QnaBox>
    <QnaBox>
      <Question>What kind of e-commerce websites?</Question>
      <Answer>
        I focused on a C2C platform that allow normal people not only can shop
        but also can sell their products. For example, people can sell their old
        but still nice clothes to others on our websites.
      </Answer>
    </QnaBox>
  </TopicBox>
);

const HowYouHeardAboutThisPosition = () => (
  <TopicBox>
    <h2>How you heard about this position?</h2>
    <QnaBox>
      <Question>Can you tell me how you heard about this position?</Question>
      <Answer>
        I heard about the position from my college classmate, Willy. He's
        working at NetBase as a software engineer currently. Then I check the
        requirements of this position on the website. Well, not a problem. And
        the product purpose is to provide users a nice way to gain an insight
        into data, which is great. I think this is the core value of front-end
        engineer.
      </Answer>
    </QnaBox>
  </TopicBox>
);

const WhatAttractedYouToOurCompany = () => (
  <TopicBox>
    <h2>What attracted you to our company?</h2>
    <QnaBox>
      <Question>What attracted you to our company?</Question>
      <Answer>
        According to information on the website and heard from my friend.
        NetBase Quid is a company with a culture of flexibility, autonomy and
        responsibility. The company also care about the mental health of
        employees. And this is very important, especially in 2020.
      </Answer>
    </QnaBox>
  </TopicBox>
);

const GreatestStrength = () => (
  <TopicBox>
    <h2>Greatest strength</h2>
    <QnaBox>
      <Question>What would you say is your greatest strength?</Question>
      <Answer>TBD.</Answer>
    </QnaBox>
  </TopicBox>
);
/* eslint-enable react/no-unescaped-entities */

const StyledTopics = styled.ul``;
const Topics = () => (
  <StyledTopics>
    <SmallTalk />
    <TellMeALittleBitAboutYourself />
    <HowYouHeardAboutThisPosition />
    <WhatAttractedYouToOurCompany />
    <GreatestStrength />
  </StyledTopics>
);

const StyledInterviewNotes = styled.main`
  max-width: 600px;
  margin: auto;
  padding: var(--space-xl) 0;
`;
const InterviewNotes = () => (
  <StyledInterviewNotes>
    <h1>Interview Notes</h1>
    <Topics />
  </StyledInterviewNotes>
);

export default InterviewNotes;
