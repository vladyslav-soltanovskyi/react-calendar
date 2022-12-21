import React from 'react';
import propTypes from "prop-types";
import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, start, end, title }) => {
        const eventStart = `${start.getHours()}:${formatMins(
          start.getMinutes()
        )}`;
        const eventEnd = `${end.getHours()}:${formatMins(
          end.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(end.getTime() - start.getTime()) / (1000 * 60)}
            marginTop={start.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: propTypes.number,
  hourEvents: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
      description: propTypes.string,
      start: propTypes.instanceOf(Date),
      end: propTypes.instanceOf(Date)
    })
  )
}

export default Hour;
