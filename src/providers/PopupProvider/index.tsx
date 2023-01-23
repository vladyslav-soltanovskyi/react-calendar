import React, { FC } from "react";
import { usePopup } from "hooks/usePopup";
import Popup from "components/common/popup/Popup";

export const PopupProvider: FC = ({ children }) => {
  const { popupOptions, isOpenPopup } = usePopup();

  return (
    <>
      {isOpenPopup && <Popup {...popupOptions} />}
      {children}
    </>
  );
};
