import React, { useContext, useCallback, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

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
CloseButton.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
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
const SAVE_CHATROOM_SUBJECT = gql`
  mutation saveChatroomSubject($chatroomId: String!, $subject: String!) {
    saveChatroomSubject(chatroomId: $chatroomId, subject: $subject) {
      chatroomId
      subject
      error {
        code
        message
      }
    }
  }
`;
const EditChatroomSubjectForm = ({ chatroomId, subject }) => {
  const [form, setForm] = useState({ subject });
  const { setPopupModal } = useContext(PopupModalContext);
  // TODO: loading style
  // TODO: move handleSaveSubject to upper scope for changing <ChatroomSubject />
  const [saveChatroomSubject] = useMutation(SAVE_CHATROOM_SUBJECT, {
    variables: {
      chatroomId,
      subject: form.subject,
    },
    onCompleted: (mutationData) => {
      setForm({ subject: mutationData.saveChatroomSubject.subject });
      setPopupModal({ active: false, content: null });
    },
  });
  const handleChangeSubject = useCallback(
    (event) => {
      const input = event.target;
      setForm({ subject: input.value });
    },
    [setForm]
  );
  const handleSaveSubject = useCallback(() => saveChatroomSubject(), [
    saveChatroomSubject,
  ]);
  const handleClosePopupModal = useCallback(
    () => setPopupModal({ active: false, content: null }),
    [setPopupModal]
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
EditChatroomSubjectForm.propTypes = {
  chatroomId: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default EditChatroomSubjectForm;
