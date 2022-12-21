import React, { useState } from "react";
import { ModalContext } from "./ModalContext";
import Modal from "../../components/Modal/Modal";

export const ModalProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => setModalOpened(true);

  const closeModal = () => setModalOpened(false);

  const valueModalProvider = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {modalOpened && <Modal />}
      {children}
    </ModalContext.Provider>
  );
};
