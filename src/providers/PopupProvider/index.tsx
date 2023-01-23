import React, { FC } from "react";
import Popup from "components/common/popup/Popup";
import { usePopup } from "hooks/index";

export const PopupProvider: FC = ({ children }) => {
  const { popupOptions, isOpenPopup } = usePopup();

  return (
    <>
      {isOpenPopup && <Popup {...popupOptions} />}
      {children}
    </>
  );
};
