import React, { FC } from 'react';
import Day from '../day/Day';
import { IEvent } from 'types/event';

import './week.scss';

interface WeekProps {
  weekDates: Date[];
  events: IEvent[];
}

const Week: FC<WeekProps> = ({ weekDates, events }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = events?.filter(
          (event) => new Date(event.start).getTime() > dayStart.getTime() && new Date(event.end).getTime() < dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            dateDay={dayStart}
          />
        );
      })}
    </div>
  );
};

export default Week;
