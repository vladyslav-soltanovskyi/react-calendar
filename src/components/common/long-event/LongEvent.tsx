import cn from "classnames";
import { usePopup } from "hooks/usePopup";
import React, { FC, MouseEvent } from "react";
import { IEvent } from "types/event";
import { formatDate } from "utils/date";

import styles from './long-event.module.scss';

interface ILongEventProps {
  event: IEvent;
  width: number;
  top: number;
  color: string;
  isShowEvent: boolean;
  isMovingToNext: boolean;
  isMovingFromPrev: boolean;
}

const LongEvent: FC<ILongEventProps> = ({
  event,
  width,
  top,
  color,
  isShowEvent,
  isMovingToNext,
  isMovingFromPrev
}) => {
  const { openPopup } = usePopup();
  const eventStyle = {
    width: `calc(${width}% - 2%)`,
    top: `${top}px`,
    opacity: isShowEvent ? 1 : 0,
    zIndex: isShowEvent ? 1 : -1
  };

  const eventContainerStyle = { background: color };
  const arrowLeftStyle = { borderRightColor: color };
  const arrowRightStyle = { borderLeftColor: color };

  const handleOpenModal = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    e.stopPropagation();
    openPopup({
      x: clientX,
      y: clientY,
      eventId: event.id
    });
  }

  return (
    <div
      className={cn(styles.event, {
        [styles.event_left]: isMovingFromPrev,
        [styles.event_right]: isMovingToNext,
      })}
      style={eventStyle}
      onClick={handleOpenModal}
    >
      <div
        className={styles.event__container}
        style={eventContainerStyle}
      >
        {event.title}
        {event.type === 'event' && (
          `, ${formatDate(new Date(event.start), 'hh:mm')}`
        )}
        {isMovingFromPrev && (
          <div
            className={cn(styles.event__arrow, styles.event__arrow_left)}
            style={arrowLeftStyle}
          ></div>
        )}
        {isMovingToNext && (
          <div
            className={cn(styles.event__arrow, styles.event__arrow_right)}
            style={arrowRightStyle}
          ></div>
        )}
      </div>
    </div>
  );
}

export default LongEvent;