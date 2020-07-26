import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components";
import clz from "classnames";

const StyledButton = styled.button`
  color: var(--btn-secondary-txt);
  border: 3px solid var(--btn-secondary-bdr);
  background: var(--btn-secondary-bg);
  font-size: 1rem;
  font-weight: bold;
  box-sizing: initial;
  width: 4rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: calc(1rem + 3px);
  padding: 0 1rem;
`;
export const SecondaryButton = ({ text, handleOnClick, size = "md" }) => {
  return (
    <StyledButton type="button" className={clz(size)} onClick={handleOnClick}>
      {text}
    </StyledButton>
  );
};

const StyledPrimaryButton = styled(StyledButton)`
  color: var(--btn-primary-txt);
  border-color: var(--btn-primary-bdr);
  background-color: var(--btn-primary-bg);
`;
export const PrimaryButton = ({ text, handleOnClick, size = "md" }) => {
  return (
    <StyledPrimaryButton
      type="button"
      className={clz(size)}
      onClick={handleOnClick}
    >
      {text}
    </StyledPrimaryButton>
  );
};
