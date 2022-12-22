import React, { useState } from "react";
import { PopupContext } from "./PopupContext";
import Popup from "../../components/popup/Popup";

export const PopupProvider = ({ children }) => {
  const [optionsPopup, setOptionsPopup] = useState({ x: 0, y: 0, eventId: 0 });
  const [popupOpened, setPopupOpened] = useState(false);

  const openPopup = (options) => {
    setOptionsPopup(options);
    setPopupOpened(true);
  }

  const closePopup = () => setPopupOpened(false);

  const valuePopupProvider = {
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
