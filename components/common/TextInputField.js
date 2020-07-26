import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components";

const StyledTextInputField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    margin-bottom: var(--space-sm);
  }
  input {
    border: 3px solid var(--mono-light);
    border-radius: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    font-size: 1.25rem;
    color: var(--txt-primary);
  }
`;
const TextInputField = ({ id, value, handleOnChange }) => (
  <StyledTextInputField>
    <label htmlFor={id}>Chatroom subject</label>
    <input id={id} type="text" value={value} onChange={handleOnChange} />
  </StyledTextInputField>
);

export default TextInputField;
