import React, { useRef, useState } from 'react';
import { useClickOutside, useEventsStore, useModal } from '../../hooks';
import { getDateTime } from '../../utils/date';
import api from "../../gateway/events";

import './modal.scss';

const Modal = () => {
  const { closeModal } = useModal();
  const { dispatch, addEvent } = useEventsStore();
  const modalRef = useRef();
  const [fieldsForm, setFieldsForm] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => setFieldsForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const newEvent = {
      title: fieldsForm.title,
      description: fieldsForm.description,
      start: getDateTime(fieldsForm.date, fieldsForm.startTime),
      end: getDateTime(fieldsForm.date, fieldsForm.endTime),
    };
    
    api.createEvent(newEvent)
      .then(event => {
        dispatch(addEvent(event));
        closeModal();
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  useClickOutside(modalRef, closeModal);
  
  return (
    <div className="modal overlay">
      <div className="modal__content" ref={modalRef}>
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={closeModal}
          >+</button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn" disabled={isSending}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
