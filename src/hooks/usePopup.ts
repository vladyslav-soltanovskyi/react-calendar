import { useContext } from "react";
import { PopupContext } from "../providers/PopupProvider/PopupContext";

export function usePopup() {
  return useContext(PopupContext);
}