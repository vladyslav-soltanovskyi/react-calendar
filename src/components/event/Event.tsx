import React, { FC } from 'react';
import { usePopup } from 'hooks/index';

import './event.scss';

interface EventProps {
  height: number;
  marginTop: number;
  title: string;
  time: string;
  id: string;
}

const Event: FC<EventProps> = ({ height, marginTop, title, time, id }) => {
  const { openPopup } = usePopup();

  const eventStyle = {
    height,
    marginTop,
  };

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    openPopup({ x: clientX, y: clientY, eventId: id });
  }

  return (
    <div style={eventStyle} className="event" onClick={handleClick}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;
