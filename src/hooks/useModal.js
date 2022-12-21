import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider/ModalContext";

export function useModal() {
  return useContext(ModalContext);
}