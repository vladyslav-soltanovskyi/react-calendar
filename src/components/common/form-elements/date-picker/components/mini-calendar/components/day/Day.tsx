import React, { FC } from "react";
import { IMonthDay, TMonth } from "types/date";
import { checkDateIsEqual, checkIsToday } from "utils/date";
import cn from "classnames";

import styles from './day.module.scss';

interface DayProps {
  day: IMonthDay;
  selectedMonth: TMonth;
  selectDay: (date: Date) => void;
  selectedDate: Date;
}

const Day: FC<DayProps> = ({ day, selectedMonth, selectDay, selectedDate }) => {
  const isToday = checkIsToday(day.date);
  const isSelectedDay = checkDateIsEqual(day.date, selectedDate);
  const isAdditionalDay = day.monthIndex !== selectedMonth.monthIndex;

  const handleSelectDay = () => selectDay(day.date);

  return (
    <div
      key={`${day.dayNumber}-${day.monthIndex}`}
      aria-hidden
      onClick={handleSelectDay}
      className={cn(styles.day, {
        [styles.day_today]: isToday,
        [styles.day_selected]: isSelectedDay,
        [styles.day_additional]: isAdditionalDay
      })}
    >
      {day.dayNumber}
    </div>
  );
}

export default Day;