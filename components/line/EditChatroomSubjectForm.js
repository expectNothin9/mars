import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";
import { PopupModalContext } from "../common/PopupModal";
import TextInputField from "../common/TextInputField";

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
const EditChatroomSubjectForm = ({ subject }) => {
  const [form, setForm] = useState({ subject });
  const handleChangeSubject = useCallback(
    (event) => {
      const input = event.target;
      setForm({ subject: input.value });
    },
    [setForm]
  );
  return (
    <StyledEditChatroomSubjectForm>
      <CloseButton />
      <header>Edit</header>
      <div>
        <TextInputField
          id="chatroom-subject"
          value={form.subject}
          handleOnChange={handleChangeSubject}
        />
      </div>
    </StyledEditChatroomSubjectForm>
  );
};

export default EditChatroomSubjectForm;
