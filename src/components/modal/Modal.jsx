import React, { useRef } from 'react';
import { useClickOutside, useModal } from '../../hooks';

import './modal.scss';

const Modal = () => {
  const { closeModal } = useModal();
  const modalRef = useRef();

  useClickOutside(modalRef, closeModal);
  
  return (
    <div className="modal overlay">
      <div className="modal__content" ref={modalRef}>
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={closeModal}
          >+</button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input type="date" name="date" className="event-form__field" />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
