import React from 'react';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        const uniqKey = `${dayDate.getFullYear()}-${dayDate.getMonth()}-${dayDate.getDate()}`;
        console.log(uniqKey)
        return (
          <div
            className="calendar__day-label day-label"
            key={uniqKey}
          >
            <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
            <span className="day-label__day-number">{dayDate.getDate()}</span>
          </div>
        )
      })}
    </header>
  );
};

export default Navigation;
