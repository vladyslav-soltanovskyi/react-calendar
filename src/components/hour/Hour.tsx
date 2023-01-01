import React, { FC } from 'react';
import { formatMins } from 'utils/date';
import Event from '../event/Event';
import TimeLine from '../time-line/TimeLine';
import { IEvent } from 'types/event';

import './hour.scss';

interface HourProps {
  dataHour: number;
  dateDay: Date;
  hourEvents: IEvent[];
}

const Hour: FC<HourProps> = ({ dataHour, hourEvents, dateDay }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      <TimeLine dataHour={dataHour} dateDay={dateDay} />
      {/* if no events in the current hour nothing will render here */}
      {hourEvents?.map(({ id, start, end, title }) => {
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

export default Hour;
