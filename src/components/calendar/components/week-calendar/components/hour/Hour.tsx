import React, { FC, MouseEvent, useRef, useState } from 'react';
import { checkIsToday, shmoment } from 'utils/date';
import Event from '../event/Event';
import TimeLine from '../time-line/TimeLine';
import { IEvent } from 'types/event';
import { getStyledByPositionXForEvent, getStyledByPostionYForEvent } from 'utils/helpers';
import { useModal } from 'hooks/useModal';

import styles from './hour.module.scss';

interface IHourProps {
  dataHour: number;
  dateDay: Date;
  hourEvents: IEvent[];
  dayEvents: IEvent[];
}

const Hour: FC<IHourProps> = ({
  dataHour,
  hourEvents,
  dateDay,
  dayEvents
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const timeSlotRef = useRef<HTMLDivElement>();
  const isCurrentHour = dataHour === currentDate.getHours();
  const { openModalCreate } = useModal();

  const handleCreateEvent = (e: MouseEvent<HTMLDivElement>) => {
    const { top } = timeSlotRef.current.getBoundingClientRect();
    const offsetY = e.pageY - top;
    
    const mins = Math.floor(offsetY / 30) * 30;
    const selectedDate = shmoment(dateDay).add('hours', dataHour).add('minutes', mins).result();
    
    openModalCreate({ selectedDate })
  }

  return (
    <div
      className={styles.time__slot}
      data-time={dataHour + 1}
      onClick={handleCreateEvent}
      ref={timeSlotRef}
    >
      {(checkIsToday(dateDay) && isCurrentHour) && (
        <TimeLine currentDate={currentDate} setCurrentDate={setCurrentDate} />
      )}

      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map((event) => {
        const { id, title, color } = event;

        const { eventHeight, offsetTop, time } = getStyledByPostionYForEvent(event, dateDay);
        const { left, width } = getStyledByPositionXForEvent(dayEvents, event);
        
        return (
          <Event
            key={id}
            height={eventHeight}
            top={offsetTop}
            time={time}
            title={title}
            color={color}
            id={id}
            left={left}
            width={width}
          />
        );
      })}
    </div>
  );
};

export default Hour;
