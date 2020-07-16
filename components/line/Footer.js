import React from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";
import FARIcon from "../common/FARIcon";

const StyledButton = styled.button`
  width: calc(var(--ft-h) + 0.25rem);
  height: var(--ft-h);
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  i {
    font-size: 1.75rem;
  }
`;

const MoreFunctionToggleButton = () => (
  <StyledButton>
    <FASIcon name="plus" />
  </StyledButton>
);

const CameraButton = () => (
  <StyledButton>
    <FASIcon name="camera" />
  </StyledButton>
);

const PhotoGalleryButton = () => (
  <StyledButton>
    <FASIcon name="images" />
  </StyledButton>
);

const MicrophoneButton = () => (
  <StyledButton>
    <FASIcon name="microphone" />
  </StyledButton>
);

const StyledStickerButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.25rem;
  width: 2rem;
  height: 2rem;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  i {
    font-size: 1.25rem;
  }
`;
const StickerButton = () => (
  <StyledStickerButton>
    <FARIcon name="smile" />
  </StyledStickerButton>
);

const StyledInputBar = styled.div`
  flex-grow: 1;
  margin: 0 var(--space-xl);
  position: relative;

  input {
    width: 100%;
    height: 2rem;
    padding: 0 2.25rem 0 0.75rem;
    margin: 0.5rem 0 0;
    box-sizing: border-box;
    border: none;
    border-radius: 1rem;
    background: var(--mono-light);
  }
`;
const InputBar = ({ title = "Chatroom Title", memberCount = 9 }) => (
  <StyledInputBar>
    <input type="text" placeholder="Aa" />
    <StickerButton />
  </StyledInputBar>
);

const StyledFooter = styled.footer`
  --ft-h: calc(var(--h-unit) + 0.5rem);
  height: var(--ft-h);
  display: flex;
`;
const Footer = () => (
  <StyledFooter>
    <MoreFunctionToggleButton />
    <CameraButton />
    <PhotoGalleryButton />
    <InputBar />
    <MicrophoneButton />
  </StyledFooter>
);

export default Footer;
