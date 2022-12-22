import React, { useRef } from 'react';
import propTypes from "prop-types";
import { useClickOutside } from '../../hooks';

const Popup = ({ x, y, closePopup }) => {
  const popupRef = useRef(null);
  const popupStyle = {
    left: `${x}px`,
    top: `${y}px`
  };

  useClickOutside(popupRef, closePopup)

  return (
    <div className="popup__content" ref={popupRef} style={popupStyle}>
      <button className="delete-event-btn">
        <span className="delete-event-btn__icon">
          <i className="fas fa-trash"></i>
        </span>
        <span className="delete-event-btn__text">
          Delete
        </span>
      </button>
    </div>
  );
};

Popup.propTypes = {
  x: propTypes.number,
  y: propTypes.number,
  closePopup: propTypes.func,
  id: propTypes.string
}

export default Popup;
