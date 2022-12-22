import React from 'react';
import propTypes from "prop-types";
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = events.filter(
          (event) => new Date(event.start) > dayStart && new Date(event.end) < dayEnd
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

Week.propTypes = {
  weekDates: propTypes.arrayOf(propTypes.instanceOf(Date)),
  events: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      description: propTypes.string,
      start: propTypes.string,
      end: propTypes.string
    })
  )
}

export default Week;
