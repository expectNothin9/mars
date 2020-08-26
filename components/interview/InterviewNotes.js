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
  opacity: 0;
  &:hover {
    opacity: 1;
  }
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
      <Answer>Sure. I would like some black coffee, thank you.</Answer>
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
        of skills and experience on web development, from old-school style to
        modern style, like React and Node.js.
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
    <QnaBox>
      <Question>
        Would you tell me about any of your previous project? And difficulties
        you meet.
      </Question>
      <Answer>
        Recently I'm working on providing instant message feature to our
        e-commerce users. The user experience could be improved because of
        conversations between buyers and sellers became rapidly. We adopted
        3rd-party IM SDK which has limitation on concurrent connections and API
        requests. So we built a cluster mechanism based on localStorage to let
        browser tabs can share same connections and reduce API requests with
        3rd-party server.
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
        I heard about the position from my college classmate, Willy. He's a
        software engineer working at NetBase Quid currently. Then I check the
        requirements of this position on the website. Well, I think maybe not a
        problem. And I also check the product of the company. Providing users a
        nice way to gain an insight into the data, it is great. I think this is
        the core value of the front-end engineer. To help people can read the
        data easier.
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
        According to the information I got from the website and heard from my
        friend. NetBase Quid is a company with a culture of flexibility,
        autonomy and responsibility. The company also care about the mental
        health of their employees. And this is very important, especially in
        2020.
      </Answer>
    </QnaBox>
  </TopicBox>
);

const GreatestStrength = () => (
  <TopicBox>
    <h2>Greatest strength</h2>
    <QnaBox>
      <Question>What would you say is your greatest strength?</Question>
      <Answer>
        My greatest strength is understanding. I find that it is very important
        when I working on a complicated project with many uncertainties. As a
        team lead, I have to break down high level requirements or ideas. Then
        think of possible solutions, difficulties might encounter or any
        cross-team communication need to be done at first. To make sure the
        project not just can be achieved within the schedule, but also can be
        executed by team efficiently and correctly.
      </Answer>
    </QnaBox>
    <QnaBox>
      <Question>How do you solve conflicts?</Question>
      <Answer>
        I will find out what is the key point cause the conflicts. Then try my
        best to consider from other members aspect and find the best solution in
        my mind. If conflicts still cannot be resolved, then I will report to my
        manager in details. And let my manager to deal with it.
      </Answer>
    </QnaBox>
  </TopicBox>
);

const SufferedASetback = () => (
  <TopicBox>
    <h2>When have you suffered a setback?</h2>
    <QnaBox>
      <Question>
        Can you tell me about a time when you suffered a setback and had to
        maintain your enthusiasm?
      </Question>
      <Answer>
        Yes. In the past, We have released a feature to user without the design
        review and got many disappointing feedbacks. Sometimes we just want to
        fulfill the goal we established and forget the most important thing is
        to create nice application with quality for our users. After that, we
        keep this lession in mind. Check and double the quality of our features.
      </Answer>
    </QnaBox>
    <QnaBox>
      <Question>
        Tell me about a time when you had to respond to a crisis.
      </Question>
      <Answer>
        When there is a crisis happened, I always try to understand what is the
        problem at first, then contact with members should be involved. And we
        will create a slack channel for discussing issues and sharing the
        information in order to fix the problem ASAP. In the mean time, we also
        keep updating the progress of the event to everyone. After the crisis
        has been resolved, we will setup a meeting or send out a report to share
        the experience and the follow-up tasks.
      </Answer>
    </QnaBox>
  </TopicBox>
);

const GreatestWeakness = () => (
  <TopicBox>
    <h2>Greatest weakness</h2>
    <QnaBox>
      <Question>What do you consider your greatest weakness?</Question>
      <Answer>
        Honestly speaking, about this position I consider my greatest weakness
        is English conversation. I don't have experience on working in an
        environment need to speak English. So in fact, when I preparing for this
        interview, I spent most part of my time on preparing English
        conversations. I find that it is really a challenge, but also an
        opportunity for me to improve my English speaking skill. To get familiar
        with a language is never a bad decision.
      </Answer>
    </QnaBox>
  </TopicBox>
);
/* eslint-enable react/no-unescaped-entities */

const StyledTopics = styled.ul`
  padding: 0;
`;
const Topics = () => (
  <StyledTopics>
    <SmallTalk />
    <TellMeALittleBitAboutYourself />
    <HowYouHeardAboutThisPosition />
    <WhatAttractedYouToOurCompany />
    <GreatestStrength />
    <SufferedASetback />
    <GreatestWeakness />
  </StyledTopics>
);

const StyledInterviewNotes = styled.main`
  max-width: 600px;
  margin: auto;
  padding: var(--space-xl) 0;
  @media screen and (max-width: 600px) {
    padding: var(--space-xl) var(--space-md);
  }
`;
const InterviewNotes = () => (
  <StyledInterviewNotes>
    <h1>Interview Notes</h1>
    <Topics />
  </StyledInterviewNotes>
);

export default InterviewNotes;
