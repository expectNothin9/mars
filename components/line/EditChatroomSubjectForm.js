import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components";

import FASIcon from "../common/FASIcon";
import { PopupModalContext } from "../common/PopupModal";
import TextInputField from "../common/TextInputField";
import { PrimaryButton, SecondaryButton } from "../common/Button";

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
const CloseButton = ({ handleOnClick }) => (
  <StyledCloseButton type="button" onClick={handleOnClick}>
    <FASIcon name="times" />
  </StyledCloseButton>
);

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
  footer {
    display: flex;
    flex-direction: row-reverse;

    button {
      margin-left: var(--space-sm);
    }
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
  const { setPopupModal } = useContext(PopupModalContext);
  const handleSaveSubject = useCallback(() =>
    setPopupModal({ active: false, content: null }, [setPopupModal])
  );
  const handleClosePopupModal = useCallback(() =>
    setPopupModal({ active: false, content: null }, [setPopupModal])
  );
  return (
    <StyledEditChatroomSubjectForm>
      <CloseButton handleOnClick={handleClosePopupModal} />
      <header>Edit</header>
      <div>
        <TextInputField
          id="chatroom-subject"
          value={form.subject}
          handleOnChange={handleChangeSubject}
        />
      </div>
      <footer>
        <PrimaryButton text="Save" handleOnClick={handleSaveSubject} />
        <SecondaryButton text="Cancel" handleOnClick={handleClosePopupModal} />
      </footer>
    </StyledEditChatroomSubjectForm>
  );
};

export default EditChatroomSubjectForm;
