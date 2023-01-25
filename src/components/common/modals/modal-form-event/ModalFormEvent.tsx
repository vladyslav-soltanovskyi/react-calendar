import React, { ChangeEvent, FC, useRef } from 'react';
import { useClickOutside, useForm } from 'hooks/index';
import { checkDateIsEqual, getDateTime, getDifferenceInTimeFromTwoTimes, getDifferenceOfTwoDates, shmoment } from 'utils/date';
import { TSubmitHandler } from 'hooks/useForm/types';
import { createEventSchema } from 'validation-schemas/index';
import { IModalValues } from './types';
import { TPartialEvent } from 'types/event';
import { TextField, DatePicker, TimePicker, ColorPicker } from 'components/common/form-elements';
import cn from 'classnames';

import styles from './modal-form-event.module.scss';

interface IModalFormEventProps {
  textSendButton: string;
  textSendingBtn: string;
  defaultEventValues: IModalValues;
  closeModal: () => void;
  handlerSubmit: (eventData: TPartialEvent) => void;
}

const ModalFormEvent: FC<IModalFormEventProps> = ({
  textSendButton,
  textSendingBtn,
  closeModal,
  defaultEventValues,
  handlerSubmit
}) => {
  const modalRef = useRef<HTMLDivElement>();

  const { values, handleChange, handleSubmit, setValue, errors, submitting } = useForm<IModalValues>({
    defaultValues: defaultEventValues,
    rules: createEventSchema
  });

  const isValid = Object.keys(errors).length === 0;
  
  const onSelectStartDate = (date: Date) => {
    if (values.isLongEvent) {
      const { minutes } = getDifferenceOfTwoDates(values.startDate, values.endDate);
      const newEndDate = shmoment(date).add('minutes', minutes).result();
      
      setValue('endDate', newEndDate);
      setValue('startDate', date);
      return;
    }

    const oldStartDate = getDateTime(values.startDate, values.startTime);
    const newStartDate = getDateTime(date, values.startTime);
    const { minutes } = getDifferenceOfTwoDates(oldStartDate, values.endDate);
    const newEndDate = shmoment(newStartDate).add('minutes', minutes).result();

    setValue('endDate', newEndDate);
    setValue('startDate', newStartDate);
  }

  const onSelectEndDate = (date: Date) => {
    const endTime = values.isLongEvent ? '23:59' : values.endTime;
    setValue('endDate', getDateTime(date, endTime));
  }

  const onSelectStartTime = (time: string) => {
    const [startHours, startMins] = time.split(':');
    const { hours, minutes } = getDifferenceOfTwoDates(values.startDate, values.endDate);
    const restHourFromDiff = (+startMins + (minutes % 60)) >= 60  ? 1 : 0;
    
    const newEndMins = ((+startMins + minutes) % 60).toString().padStart(2, '0');
    const newEndHours = ((+startHours + Math.floor(hours) + restHourFromDiff) % 24).toString().padStart(2, '0');
    
    const newEndTime = `${newEndHours}:${newEndMins}`;
    const newEndDate = shmoment(getDateTime(values.startDate, time)).add('minutes', minutes).result();
    
    setValue('startTime', time);
    setValue('endTime', newEndTime);
    setValue('endDate', newEndDate);
    setValue('startDate', getDateTime(values.startDate, time));
  }

  const onSelectEndTime = (time: string) => {
    const isDatesEqual = checkDateIsEqual(values.startDate, values.endDate);
    const {
      minutes
    } = (isDatesEqual || !!errors.endDate)
    ? getDifferenceInTimeFromTwoTimes(values.startTime, time)
    : getDifferenceOfTwoDates(values.startDate, getDateTime(values.endDate, time));
    const newEndDate = shmoment(getDateTime(values.startDate, values.startTime)).add('minutes', minutes).result();

    setValue('endTime', time);
    setValue('endDate', newEndDate);
  }

  const onChangeColor = (color: string) => setValue('color', color);

  const onToggleIsLongEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const isLongEvent = e.target.checked;
    const startTime = isLongEvent ? '00:00' : values.startTime;
    const endTime = isLongEvent ? '23:59' : values.endTime;
    
    setValue('isLongEvent', isLongEvent);
    setValue('startDate', getDateTime(values.startDate, startTime));
    setValue('endDate', getDateTime(values.endDate, endTime));
  }

  const onSubmit: TSubmitHandler<IModalValues> = async (data) => {
    const newEvent: TPartialEvent = {
      title: data.title,
      description: data.description,
      start: data.startDate.toString(),
      end: data.endDate.toString(),
      type: data.isLongEvent ? 'long-event' : 'event',
      color: data.color
    };

    await handlerSubmit(newEvent);
    closeModal();
  }
  
  useClickOutside(modalRef, closeModal);
  
  return (
    <div className="overlay">
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modal__content}>
          <button
            className={styles.modal__content__close}
            onClick={closeModal}
          >
            <i className="fas fa-times"></i>
          </button>
          <form
            className={styles.modal__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={values.title}
              error={errors.title}
              className={styles.modal__form__title}
              fullWidth
            />
              <div className={cn(styles.modal__form__date, styles.modal__form__group)}>
                <DatePicker
                  selectedDate={values.startDate}
                  selectDate={onSelectStartDate}
                  error={errors.startDate}
                />
                {!values.isLongEvent && (
                  <div className={styles.modal__form__time}>
                    <TimePicker
                      timeFrom='00:00'
                      selectedTime={values.startTime}
                      selectTime={onSelectStartTime}
                      isFullDay
                      error={errors.startTime}
                    />
                    <span>-</span>
                    <TimePicker
                      timeFrom={values.startTime}
                      selectedTime={values.endTime}
                      selectTime={onSelectEndTime}
                      isToday={checkDateIsEqual(values.startDate, values.endDate)}
                      error={errors.endTime ?? errors.endDate}
                    />
                  </div>
                )}
                {values.isLongEvent && <div>-</div>}
                <div>
                  <DatePicker
                    selectedDate={values.endDate}
                    selectDate={onSelectEndDate}
                    error={errors.endDate}
                  />
                </div>
              </div>
              {(!!errors.startDate || !!errors.endDate || !!errors.startTime || !!errors.endTime) && (
                <div className={styles.modal__form__error}>
                  {(errors.startDate ?? errors.endDate ?? errors.startTime ?? errors.endTime)}
                </div>
              )}
            <div className={cn(styles.modal__form__checkbox__container, styles.modal__form__group)}>
              <label htmlFor="type">
                <input
                  type="checkbox"
                  name="type"
                  id="type"
                  onChange={onToggleIsLongEvent}
                  checked={values.isLongEvent}
                />
                <span className={styles.modal__form__checkbox__title}>All day</span>
              </label>
            </div>
            <div className={styles.modal__form__group}>
              <ColorPicker
                selectedColor={values.color}
                onChangeColor={onChangeColor}
              />
            </div>
            <div className={cn(styles.modal__form__textarea__container, styles.modal__form__group)}>
              <textarea
                name="description"
                placeholder="Description"
                className={styles.modal__form__textarea}
                onChange={handleChange}
                value={values.description}
              />
            </div>
            <button
              type="submit"
              className={styles.modal__form__btn}
              disabled={submitting || !isValid}
            >
              {submitting ? textSendingBtn : textSendButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalFormEvent;