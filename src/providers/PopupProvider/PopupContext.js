import { createContext } from "react";

export const PopupContext = createContext({
  openPopup: (options) => {},
  closePopup: () => {},
});
