import React, { useState } from 'react';
import propTypes from "prop-types";
import Popup from '../popup/Popup';

import './event.scss';

const Event = ({ height, marginTop, title, time, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const eventStyle = {
    height,
    marginTop,
  };

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    setCoordinates({ x: clientX, y: clientY})
    openPopup();
  }

  return (
    <>
      <div style={eventStyle} className="event" onClick={handleClick}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {isOpen && <Popup {...coordinates} closePopup={closePopup} eventId={id} />}
    </>
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
