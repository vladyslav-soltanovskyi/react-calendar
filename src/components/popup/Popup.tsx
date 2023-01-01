import React, { FC, useRef } from 'react';
import { useClickOutside, useEventsStore, usePopup } from 'hooks/index';

interface PopupProps {
  x: number;
  y: number;
  eventId: string;
}

const Popup: FC<PopupProps> = ({ x, y, eventId }) => {
  const popupRef = useRef(null);
  const { deleteEvent } = useEventsStore();
  const { closePopup } = usePopup();

  const popupStyle = {
    left: `${x}px`,
    top: `${y}px`
  };

  useClickOutside(popupRef, closePopup);

  const onDelete = () => deleteEvent(eventId)

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

export default Popup;
