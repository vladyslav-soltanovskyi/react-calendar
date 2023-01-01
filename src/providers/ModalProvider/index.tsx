import React, { FC, useState } from "react";
import { ModalContext } from "./ModalContext";
import Modal from "components/modal/Modal";
import { IModalContextProps } from "./types";

export const ModalProvider: FC = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => setModalOpened(true);

  const closeModal = () => setModalOpened(false);

  const valueModalProvider: IModalContextProps = {
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
