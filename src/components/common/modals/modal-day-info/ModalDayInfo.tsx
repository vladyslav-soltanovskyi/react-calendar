import React, { FC, useRef } from "react";
import { createDate } from "utils/date";
import { getEventsInterval, getLongEvents, getShortEvents, getSortedEvents, getStyledForLongEvent } from "utils/helpers";
import {
  useTypedSelector,
  useClickOutside,
  useModal
} from "hooks/index";
import LongEvent from "components/common/long-event/LongEvent";
import ShortEvent from "components/common/short-event/ShortEvent";

import styles from "./modal-day-info.module.scss";

interface IModalDayInfoProps {
  selectedDate: Date;
}

const ModalDayInfo: FC<IModalDayInfoProps> = ({
  selectedDate
}) => {
  const { closeModalDayInfo } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const { events } = useTypedSelector(({ events }) => events);

  const selectedDay = createDate({ date: selectedDate });

  const dayEvents = getEventsInterval([selectedDay], events);

  const dayLongEvents = getLongEvents(dayEvents);
  const dayShortEvents = getShortEvents(dayEvents);

  const daySortedLongEvents = getSortedEvents(dayLongEvents);
  const daySortedShortEvents = getSortedEvents(dayShortEvents);

  const modalContentHeight = dayEvents.length * 24;
  const modalContentStyle = { height: modalContentHeight > 0 ? modalContentHeight : 'auto' };

  const handleCloseModal = () => closeModalDayInfo();
  
  useClickOutside(modalRef, handleCloseModal);

  return (
    <div className="overlay">
      <div
        className={styles.modal}
        ref={modalRef}
      >
        <button
          className={styles.modal__close}
          onClick={handleCloseModal}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className={styles.modal__label}>
          <div className={styles.modal__label__name}>{selectedDay.dayShort}</div>
          <div className={styles.modal__label__number}>{selectedDay.dayNumber}</div>
        </div>

        <div
          className={styles.modal__content}
          style={modalContentStyle}
        >
          {dayEvents.length === 0 && (
            <div className={styles.modal__empty__events}>There are no events scheduled on this day.</div>
          )}
          {daySortedLongEvents.map((event, indx) => {
            const { isMovingToNext, isMovingFromPrev } = getStyledForLongEvent([selectedDay], selectedDay, event);
            const top = indx * 24;
            
            return (
              <LongEvent
                key={event.id}
                event={event}
                width={102}
                top={top}
                color={event.color}
                isShowEvent={true}
                isMovingToNext={isMovingToNext}
                isMovingFromPrev={isMovingFromPrev}
              />
            )
          })}
          {daySortedShortEvents.map((event, indx) => {
            const top = (daySortedLongEvents.length + indx) * 24;

            return (
              <ShortEvent
                key={event.id}
                event={event}
                top={top}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ModalDayInfo;