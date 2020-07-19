import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import clz from "classnames";

const StyledPopupModal = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--background-mask-dark);
  display: none;

  &.active {
    display: block;
  }

  .popup-modal {
    width: 15rem;
    background: var(--mono-min);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const PopupModalContext = createContext();
const PopupModal = () => {
  const { popupModal } = useContext(PopupModalContext);
  return (
    <StyledPopupModal className={clz({ active: popupModal.active })}>
      <div className="popup-modal">
        <header>{popupModal.title}</header>
        <div>{popupModal.content}</div>
        <footer>Footer</footer>
      </div>
    </StyledPopupModal>
  );
};

const POPUP_MODAL = {
  active: false,
  title: "Header",
  content: "Content",
};
const PopupModalProvider = ({ children }) => {
  const [popupModal, setPopupModal] = useState(POPUP_MODAL);
  return (
    <PopupModalContext.Provider value={{ popupModal, setPopupModal }}>
      <PopupModal />
      {children}
    </PopupModalContext.Provider>
  );
};

export default PopupModalProvider;
