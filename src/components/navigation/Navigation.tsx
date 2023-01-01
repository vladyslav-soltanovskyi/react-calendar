import React, { FC } from 'react';
import cn from "classnames";
import { days, getDateObj, checkIsToday, checkIsPast } from 'utils/date';

import './navigation.scss';

interface NavigationProps {
  weekDates: Date[];
}

const Navigation: FC<NavigationProps> = ({ weekDates }) => {
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

export default Navigation;
