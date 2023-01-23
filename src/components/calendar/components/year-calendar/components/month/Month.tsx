import React, { FC } from 'react';
import { IMonth, IMonthDay, IWeekDay, TDate } from 'types/date';
import Day from '../day/Day';

import styles from './month.module.scss';

interface IMonthProps {
  calendarDaysOfMonth: IMonthDay[];
  month: IMonth;
  weekDaysNames: IWeekDay[];
  monthIndex: number;
  selectedDay: TDate;
  onChangeState: (date: Date) => void;
}

const Month: FC<IMonthProps> = ({
  calendarDaysOfMonth,
  month,
  weekDaysNames,
  monthIndex,
  selectedDay,
  onChangeState
}) => {
  return (
    <div className={styles.month}>
      <div className={styles.month__title}>
        <span className={styles.month__title__name}>
        {month.month} 
        </span>
      </div>
      <div className={styles.month__header}>
        {weekDaysNames.map(weekDay => (
          <div
            key={weekDay.day}
            className={styles.month__header__day}
          >{weekDay.dayShort}</div>
        ))}
      </div>
      <div className={styles.month__body}>
        {calendarDaysOfMonth.map((day) => (
          <Day
            key={`${day.monthIndex}-${day.dayNumber}`}
            day={day}
            monthIndex={monthIndex}
            selectedDay={selectedDay}
            onChangeState={onChangeState}
          />
        ))}
      </div>
    </div>
  );
}

export default Month;
