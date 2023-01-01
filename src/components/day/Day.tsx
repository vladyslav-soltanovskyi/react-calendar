import React, { FC } from 'react';
import Hour from '../hour/Hour';
import { IEvent } from 'types/event';

import './day.scss';

interface DayProps {
  dataDay: number;
  dateDay: Date;
  dayEvents: IEvent[];
}

const Day: FC<DayProps> = ({ dataDay, dayEvents, dateDay }) => {
  const hours = Array(24)
    .fill(0)
    .map((_, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents?.filter(
          (event) => new Date(event.start).getHours() === hour
        );

        return (
          <Hour key={dataDay + hour} dataHour={hour} dateDay={dateDay} hourEvents={hourEvents} />
        );
      })}
    </div>
  );
};

export default Day;
