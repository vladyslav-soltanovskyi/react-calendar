import React from 'react';
import propTypes from "prop-types";
import Event from '../event/Event';
import { formatMins } from '../../utils/date';
import TimeLine from '../time-line/TimeLine';

const Hour = ({ dataHour, hourEvents, dateDay }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      <TimeLine dataHour={dataHour} dateDay={dateDay} />
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, start, end, title }) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const eventStart = `${startDate.getHours()}:${formatMins(
          startDate.getMinutes()
        )}`;
        const eventEnd = `${endDate.getHours()}:${formatMins(
          endDate.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(endDate.getTime() - startDate.getTime()) / (1000 * 60)}
            marginTop={startDate.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: propTypes.number,
  dateDay: propTypes.instanceOf(Date),
  hourEvents: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      description: propTypes.string,
      start: propTypes.string,
      end: propTypes.string
    })
  )
}

export default Hour;
