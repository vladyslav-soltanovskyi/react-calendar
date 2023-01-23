import React, { FC } from "react";
import Day from "../day/Day";
import { IMonthDay, IWeekDay, TMonth } from "types/date";

import styles from './days.module.scss';

interface DaysProps {
  selectDay: (date: Date) => void;
  selectedMonth: TMonth;
  weekDaysNames: IWeekDay[];
  calendarDaysOfMonth: IMonthDay[];
  selectedDate: Date;
}

const Days: FC<DaysProps> = ({
  selectDay,
  selectedMonth,
  weekDaysNames,
  calendarDaysOfMonth,
  selectedDate
}) => {
  return (
    <>
      <div className={styles.week__names}>
        {weekDaysNames.map((weekDaysName) => (
          <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
        ))}
      </div>
      <div className={styles.days}>
        {calendarDaysOfMonth.map((day) => (  
          <Day
            key={`${day.year}-${day.monthIndex}-${day.dayNumber}`}
            day={day}
            selectedMonth={selectedMonth}
            selectDay={selectDay}
            selectedDate={selectedDate}
          />
        ))}
      </div>
    </>
  );
};

export default Days;