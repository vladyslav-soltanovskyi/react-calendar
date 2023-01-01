import React, { FC, useState } from "react";
import { PopupContext } from "./PopupContext";
import Popup from "components/popup/Popup";
import { IOptionsPopup, IPopupContextProps } from "./types";

export const PopupProvider: FC = ({ children }) => {
  const [optionsPopup, setOptionsPopup] = useState<IOptionsPopup>({ x: 0, y: 0, eventId: '0' });
  const [popupOpened, setPopupOpened] = useState(false);

  const openPopup = (options: IOptionsPopup) => {
    setOptionsPopup(options);
    setPopupOpened(true);
  }

  const closePopup = () => setPopupOpened(false);

  const valuePopupProvider: IPopupContextProps = {
    openPopup,
    closePopup,
  };

  return (
    <PopupContext.Provider value={valuePopupProvider}>
      {popupOpened && <Popup {...optionsPopup} />}
      {children}
    </PopupContext.Provider>
  );
};
