import React, { useContext, useCallback } from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";
import { PopupModalContext } from "../common/PopupModal";

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
const TextInputField = ({ id, value }) => (
  <StyledTextInputField>
    <label htmlFor={id}>Chatroom subject</label>
    <input id={id} type="text" value={value} onChange={console.log} />
  </StyledTextInputField>
);

const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
  padding: var(--space-sm);
  border-radius: var(--space-sm);

  i {
    --icon-unit: 1.5rem;
    width: var(--icon-unit);
    height: var(--icon-unit);
    font-size: var(--icon-unit);
    text-align: center;
    line-height: var(--icon-unit);
  }
`;
const CloseButton = () => {
  const { setPopupModal } = useContext(PopupModalContext);
  const handleClosePopupModal = useCallback(() =>
    setPopupModal({ active: false, content: null }, [setPopupModal])
  );
  return (
    <StyledCloseButton type="button" onClick={handleClosePopupModal}>
      <FASIcon name="times" />
    </StyledCloseButton>
  );
};

const StyledEditChatroomSubjectForm = styled.form`
  padding: var(--space-lg);
  position: relative;
  min-width: 15rem;

  header {
    margin: 0;
    font-size: 1.25rem;
  }

  & > div {
    padding: var(--space-md) 0;
  }

  @media screen and (max-width: 767px) {
    max-width: 15rem;
  }
`;
const EditChatroomSubjectForm = ({ subject }) => (
  <StyledEditChatroomSubjectForm>
    <CloseButton />
    <header>Edit</header>
    <div>
      <TextInputField id="chatroom-subject" value={subject} />
    </div>
  </StyledEditChatroomSubjectForm>
);

export default EditChatroomSubjectForm;
