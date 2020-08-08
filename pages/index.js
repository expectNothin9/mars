import React from "react";
import Head from "next/head";
import styled from "styled-components";

import CommonPage from "../components/common/CommonPage";
import UH from "../components/common/UH";
import FABIcon from "../components/common/FABIcon";

const StyledHome = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    color: var(--txt-primary);
    margin-top: 1rem;
    position: relative;
  }
  h1:after {
    content: "Since 2019";
    position: absolute;
    top: -0.5rem;
    right: 0;
    font-family: Lobster;
    font-size: 1rem;
  }
  figure,
  figure img {
    width: 20rem;
    height: 20rem;
  }
  figure figcaption {
    display: none;
  }
  .social {
    --social-i-box: 1.75rem;
    --social-i: 1.25rem;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .social li:not(:last-child) {
    margin-right: var(--space-md);
  }
  .social a {
    display: block;
    width: var(--social-i-box);
    height: var(--social-i-box);
    text-decoration: none;
    background: var(--mono-light);
    color: var(--txt-secondary);
    border: 1px dashed var(--mono);
    border-radius: 50%;
  }
  .social a:hover {
    color: var(--txt-primary);
    border-color: var(--mono-dark);
  }
  .social i {
    width: var(--social-i-box);
    height: var(--social-i-box);
    font-size: var(--social-i);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 3rem;
    }
    h1:after {
      top: -0.75rem;
    }
    figure,
    figure img {
      width: 16rem;
      height: 16rem;
    }
  }
`;

const HomeIndex = () => {
  return (
    <CommonPage>
      <Head>
        <title>AGEDLION</title>
      </Head>
      <UH />
      <StyledHome>
        <figure>
          <figcaption>AGEDLION Logo</figcaption>
          <img src="/images/agln/logo.jpg" alt="AGEDLION Logo" />
        </figure>
        <h1>AGEDLION</h1>
        <ul className="social">
          <li>
            <a href="https://www.facebook.com/agedlion">
              <FABIcon name="facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/agedlion/">
              <FABIcon name="instagram" />
            </a>
          </li>
        </ul>
      </StyledHome>
    </CommonPage>
  );
};

export default HomeIndex;
