import { createContext } from "react";

export const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});
