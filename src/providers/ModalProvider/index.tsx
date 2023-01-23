import React, { FC } from "react";
import { useModal } from "hooks/useModal";
import { ModalCreateEvent, ModalDayInfo, ModalEditEvent } from "components/common/modals";

export const ModalProvider: FC = ({ children }) => {
  const {
    isOpenModalCreateEvent,
    isOpenModalEditEvent,
    isOpenModalDayInfoEvents,
    selectedDate,
    modalEditEventOptions,
    modalCreateEventOptions
  } = useModal();

  return (
    <>
      {isOpenModalCreateEvent && (
        <ModalCreateEvent {...modalCreateEventOptions} />
      )}
      {isOpenModalEditEvent && (
        <ModalEditEvent {...modalEditEventOptions} />
      )}
      {isOpenModalDayInfoEvents && (
        <ModalDayInfo selectedDate={selectedDate} />
      )}
      {children}
    </>
  );
};
