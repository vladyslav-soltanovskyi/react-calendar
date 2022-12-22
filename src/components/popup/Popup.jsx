import React, { useRef } from 'react';
import propTypes from "prop-types";
import { useClickOutside, useEventsStore, usePopup } from '../../hooks';
import api from "../../gateway/events";

const Popup = ({ x, y, eventId }) => {
  const popupRef = useRef(null);
  const { dispatch, deleteEvent } = useEventsStore();
  const { closePopup } = usePopup();

  const popupStyle = {
    left: `${x}px`,
    top: `${y}px`
  };

  useClickOutside(popupRef, closePopup);

  const onDelete = () => {
    api.deleteEvent(eventId)
      .then(() => {
        closePopup();
        dispatch(deleteEvent(eventId));
      });
  }

  return (
    <div className="popup overlay">
      <div className="popup__content" ref={popupRef} style={popupStyle}>
        <button
          className="delete-event-btn"
          onClick={onDelete}
        >
          <span className="delete-event-btn__icon">
            <i className="fas fa-trash"></i>
          </span>
          <span className="delete-event-btn__text">
            Delete
          </span>
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  x: propTypes.number,
  y: propTypes.number,
  eventId: propTypes.string
}

export default Popup;
