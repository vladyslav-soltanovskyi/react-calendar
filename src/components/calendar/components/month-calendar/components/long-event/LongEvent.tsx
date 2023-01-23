import { usePopup } from "hooks/usePopup";
import React, { FC, MouseEvent } from "react";
import { IEvent } from "types/event";

import styles from './long-event.module.scss';

interface ILongEventProps {
  event: IEvent;
}

const LongEvent: FC<ILongEventProps> = ({
  event
}) => {
  const { openPopup } = usePopup();
  const handleOpenModal = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    e.stopPropagation();
    openPopup({
      x: clientX,
      y: clientY,
      eventId: event.id
    });
  }

  const eventStyle = { background: event.color };

  return (
    <div
      className={styles.event}
      onClick={handleOpenModal}
      style={eventStyle}
    >
      {event.title}
    </div>
  );
}

export default LongEvent;