import React from 'react';
import propTypes from "prop-types";
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, dateDay }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => new Date(event.start).getHours() === hour
        );

        return (
          <Hour key={dataDay + hour} dataHour={hour} dateDay={dateDay} hourEvents={hourEvents} />
        );
      })}
    </div>
  );
};


Day.propTypes = {
  dataDay: propTypes.number,
  dateDay: propTypes.instanceOf(Date),
  dayEvents: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      description: propTypes.string,
      start: propTypes.string,
      end: propTypes.string
    })
  )
}

export default Day;
