import React from 'react';
import propTypes from "prop-types";

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        const uniqKey = `${dayDate.getFullYear()}-${dayDate.getMonth()}-${dayDate.getDate()}`;
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


Navigation.propTypes = {
  weekDates: propTypes.arrayOf(propTypes.instanceOf(Date))
}

export default Navigation;
