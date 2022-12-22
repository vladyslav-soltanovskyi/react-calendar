import React from 'react';
import propTypes from "prop-types";
import cn from "classnames";

import { days, getDateObj } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  const currentDate = new Date();
  const currentDateObj = getDateObj(currentDate);
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        const dayDateObj = getDateObj(dayDate);
        const uniqKey = `${dayDateObj.year}-${dayDateObj.month}-${dayDateObj.day}`;
        
        const isCurrentYear = dayDateObj.year === currentDateObj.year;
        const isCurrentMonth = dayDateObj.month === currentDateObj.month;
        const isCurrentDay = dayDateObj.day === currentDateObj.day;
        const isCurrentDate = isCurrentYear && isCurrentMonth && isCurrentDay;
        const isPastDay = (currentDate.getTime() > dayDate.getTime()) && !isCurrentDate; 

        return (
          <div
            className="calendar__day-label day-label"
            key={uniqKey}
          >
            <span
              className={cn("day-label__day-name", {
                "day-label__day-name_today": isCurrentDate
              })}
            >
              {days[dayDate.getDay()]}</span>
            <span
              className={cn("day-label__day-number", {
                "day-label__day-number_today": isCurrentDate,
                "day-label__day-number_past": isPastDay
              })}
            >
              {dayDateObj.day}</span>
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
