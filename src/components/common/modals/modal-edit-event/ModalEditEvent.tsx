import React, { FC } from "react";
import { getMapEventValues } from "../helpers";
import ModalFormEvent from "../modal-form-event/ModalFormEvent";
import { TPartialEvent } from "types/event";
import { useActions, useModal } from "hooks/index";
import { IModalEditEventOptions } from "store/modals/types";


const ModalEditEvent: FC<IModalEditEventOptions> = ({
  eventData,
  eventId
}) => {
  const { updateEvent } = useActions();
  const { closeModalEdit } = useModal();
  const startDate = new Date(eventData.start);
  const endDate = new Date(eventData.end);

  const defaultEventValues = getMapEventValues({
    title: eventData.title,
    description: eventData.description,
    startDate,
    endDate,
    type: eventData.type,
    color: eventData.color
  });

  const onUpdateEvent = (event: TPartialEvent) => updateEvent({ eventId: eventId, event });

  return (
    <ModalFormEvent
      textSendButton="Edit"
      textSendingBtn="Editing"
      defaultEventValues={defaultEventValues}
      handlerSubmit={onUpdateEvent}
      closeModal={closeModalEdit}
    />
  )
}

export default ModalEditEvent;