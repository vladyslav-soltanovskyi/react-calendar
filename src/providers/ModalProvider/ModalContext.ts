import { createContext } from "react";
import { IModalContextProps } from "./types";

export const ModalContext = createContext<IModalContextProps>({
  openModal: () => {},
  closeModal: () => {},
});
