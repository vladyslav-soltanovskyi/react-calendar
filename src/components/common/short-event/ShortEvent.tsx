import { usePopup } from "hooks/usePopup";
import React, { FC, MouseEvent } from "react";
import { IEvent } from "types/event";
import { formatDate } from "utils/date";

import styles from './short-event.module.scss';

interface IShortEventProps {
  event: IEvent;
  top: number;
}

const ShortEvent: FC<IShortEventProps> = ({
  event,
  top
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
  
  const timeStart = formatDate(new Date(event.start), 'hh:mm');

  const eventStyle = { top: `${top}px` };
  
  const eventCircleStyle = { background: event.color };

  return (
    <div
      className={styles.event}
      onClick={handleOpenModal}
      style={eventStyle}
    >
      <div
        className={styles.event__circle}
        style={eventCircleStyle}
      />
      <div className={styles.event__time}>{timeStart}</div>
      <div className={styles.event__title}>{event.title}</div>
    </div>
  );
}

export default ShortEvent;