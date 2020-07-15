import React from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";

const StyledPrimaryInfo = styled.div`
  padding-top: var(--space-lg);

  h1 {
    padding: var(--space-sm) 0;
    font-family: Lobster;
    color: var(--mono-dark);
    font-size: 2.5rem;
    text-align: center;
  }
  .role-list {
    --role-i-box: 1.75rem;
    --role-i: 1.25rem;
    list-style: none;
    padding: 0 0 var(--space-sm);
    margin: 0 var(--space-xl);
    border-bottom: 1px solid var(--mono-light);
    display: flex;
    justify-content: center;
    font-family: Lobster;
  }
  .role-list li {
    display: flex;
    align-items: center;
  }
  .role-list li:not(:last-child) {
    margin-right: var(--space-md);
  }
  .role-list li i {
    width: var(--role-i-box);
    height: var(--role-i-box);
    font-size: var(--role-i);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: var(--space-xs);
  }

  @media screen and (max-width: 767px) {
    .role-list {
      margin-top: var(--space-md);
      flex-direction: column;
      align-items: center;
    }
    .role-list li:not(:last-child) {
      margin-right: 0;
    }
  }
`;

const PrimaryInfo = () => (
  <StyledPrimaryInfo>
    <h1>Ray Wen</h1>
    <ul className="role-list">
      <li>
        <FASIcon name="palette" />
        Artist
      </li>
      <li>
        <FASIcon name="laptop-code" />
        Frontend Engineer
      </li>
      <li>
        <FASIcon name="hand-scissors" />
        Copy & Paster
      </li>
    </ul>
  </StyledPrimaryInfo>
);

const StyledProfile = styled.section`
  max-width: 50rem;
  margin: auto;
  position: relative;

  .banner {
    height: 10rem;
    border-top-left-radius: var(--space-sm);
    border-top-right-radius: var(--space-sm);
    border: 1px solid var(--mono-light);
  }
  .avatar {
    position: absolute;
    top: 3.5rem;
    left: 50%;
    width: 8rem;
    height: 8rem;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid var(--mono);
    overflow: hidden;
  }
  .avatar figure,
  .avatar img {
    width: 7rem;
    height: 7rem;
  }
  .avatar figcaption {
    display: none;
  }
  @media screen and (max-width: 767px) {
    .banner {
      border: none;
      border-bottom: 1px solid var(--mono-light);
    }
  }
`;

const Profile = () => (
  <StyledProfile>
    <div className="banner"></div>
    <div className="avatar">
      <figure>
        <figcaption>Author's avatar</figcaption>
        <img src="/images/agln/logo.jpg" alt="Author's avatar" />
      </figure>
    </div>
    <PrimaryInfo />
  </StyledProfile>
);

export default Profile;
