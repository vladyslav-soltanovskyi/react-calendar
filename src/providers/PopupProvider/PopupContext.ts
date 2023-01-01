import { createContext } from "react";
import { IOptionsPopup, IPopupContextProps } from "./types";

export const PopupContext = createContext<IPopupContextProps>({
  openPopup: (options: IOptionsPopup) => {},
  closePopup: () => {},
});
