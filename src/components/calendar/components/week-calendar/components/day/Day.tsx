import React, { FC } from 'react';
import Hour from '../hour/Hour';
import { IEvent } from 'types/event';
import { IMonthDay } from 'types/date';

import styles from './day.module.scss';

interface IDayProps {
  dayEvents: IEvent[];
  prevDayEvents: IEvent[];
  nextDayEvents: IEvent[];
  dayData: IMonthDay;
}

const Day: FC<IDayProps> = ({
  dayEvents,
  dayData,
  prevDayEvents,
  nextDayEvents
}) => {
  const hours = Array(24)
    .fill(0)
    .map((_, index) => index);

  return (
    <div
      className={styles.day}
      data-day={dayData.dayNumber}
    >
      {hours.map((hour) => {
        //getting all events from the day we will render
        const currentHourEvents = dayEvents?.filter(
          (event) => new Date(event.start).getHours() === hour
        );

        const eventsFromPrevDay = prevDayEvents.filter((_) => 0 === hour);
        
        const eventsToNextDay = nextDayEvents.filter(
          (event) => new Date(event.start).getHours() === hour
        );

        const allDayEvents = [
          ...prevDayEvents,
          ...dayEvents,
          ...nextDayEvents
        ] 

        const hoursEvents = [
          ...currentHourEvents,
          ...eventsFromPrevDay,
          ...eventsToNextDay
        ];

        return (
          <Hour
            key={`${dayData.dayNumber}-${hour}`}
            dataHour={hour}
            dateDay={dayData.date}
            hourEvents={hoursEvents}
            dayEvents={allDayEvents}
          />
        );
      })}
    </div>
  );
};

export default Day;
