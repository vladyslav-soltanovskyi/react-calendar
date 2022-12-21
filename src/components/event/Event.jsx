import React from 'react';
import propTypes from "prop-types";

import './event.scss';

const Event = ({ height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

Event.propTypes = {
  height: propTypes.number,
  marginTop: propTypes.number,
  title: propTypes.string,
  time: propTypes.string
}

export default Event;
