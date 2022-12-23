import React from 'react';
import propTypes from "prop-types";
import cn from "classnames";

import { days, getDateObj, checkIsToday, checkIsPast } from '../../utils/date';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        const { day, year, month, dayOfWeek } = getDateObj(dayDate);
        const uniqKey = `${year}-${month}-${day}`;
        
        const isPastDay = checkIsPast(dayDate);
        const isTodayDay = checkIsToday(dayDate);

        return (
          <div
            className="calendar__day-label day-label"
            key={uniqKey}
          >
            <span
              className={cn("day-label__day-name", {
                "day-label__day-name_today": isTodayDay
              })}
            >
              {days[dayOfWeek]}</span>
            <span
              className={cn("day-label__day-number", {
                "day-label__day-number_today": isTodayDay,
                "day-label__day-number_past": isPastDay
              })}
            >
              {day}</span>
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
