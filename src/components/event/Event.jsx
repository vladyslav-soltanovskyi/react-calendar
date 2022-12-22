import React from 'react';
import propTypes from "prop-types";
import { usePopup } from '../../hooks';

import './event.scss';

const Event = ({ height, marginTop, title, time, id }) => {
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

Event.propTypes = {
  height: propTypes.number,
  marginTop: propTypes.number,
  title: propTypes.string,
  time: propTypes.string,
  id: propTypes.string
}

export default Event;
