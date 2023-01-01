import React, { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';
import { useClickOutside, useEventsStore, useModal } from 'hooks/index';
import { getDateTime } from 'utils/date';

import './modal.scss';
import { TPartialEvent } from 'types/event';

const Modal: FC = () => {
  const { closeModal } = useModal();
  const { addEvent } = useEventsStore();
  const modalRef = useRef();
  const [fieldsForm, setFieldsForm] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFieldsForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const newEvent: TPartialEvent = {
      title: fieldsForm.title,
      description: fieldsForm.description,
      start: getDateTime(fieldsForm.date, fieldsForm.startTime),
      end: getDateTime(fieldsForm.date, fieldsForm.endTime),
    };
    addEvent(newEvent).finally(() => {
      setIsSending(false);
      closeModal();
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
