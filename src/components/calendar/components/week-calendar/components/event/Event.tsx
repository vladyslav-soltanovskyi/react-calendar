import React, { FC, MouseEvent } from 'react';
import { usePopup } from 'hooks/index';

import styles from './event.module.scss';

interface IEventProps {
  height: number;
  top: number;
  title: string;
  time: string;
  color: string;
  id: string;
  width: string;
  left: string;
}

const Event: FC<IEventProps> = ({
  height,
  top,
  title,
  time,
  color,
  id,
  width,
  left
}) => {
  const { openPopup } = usePopup();

  const eventStyle = {
    height: height > 0 ? height : 'auto',
    top,
    background: color,
    width,
    left
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const { clientX, clientY } = e;
    openPopup({ x: clientX, y: clientY, eventId: id });
  }

  return (
    <div
      style={eventStyle}
      className={styles.event}
      onClick={handleClick}
    >
      <div className={styles.event__title}>{title}</div>
      <div className={styles.event__time}>{time}</div>
    </div>
  );
};

export default Event;
