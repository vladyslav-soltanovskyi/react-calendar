import React, { FC } from 'react';
import { IMonth, IMonthDay, IWeekDay, TDate, TMonth } from 'types/date';
import Month from './components/month/Month';

import styles from './year-calendar.module.scss';

interface IYearCalendarProps {
  calendarDaysOfYear: IMonthDay[][];
  selectedMonth: TMonth;
  monthesNames: IMonth[];
  weekDaysNames: IWeekDay[];
  selectedDay: TDate;
  onChangeState: (date: Date) => void;
}

const YearCalendar: FC<IYearCalendarProps> = ({
  calendarDaysOfYear,
  selectedMonth,
  monthesNames,
  weekDaysNames,
  selectedDay,
  onChangeState
}) => {

  return (
    <div className="calendar__body">
      <div className={styles.calendar__year__container}>
        {calendarDaysOfYear.map((calendarDaysOfMonth, i) => (
          <Month
            key={`${selectedMonth.year}-${i}`}
            calendarDaysOfMonth={calendarDaysOfMonth}
            month={monthesNames[i]}
            monthIndex={i}
            weekDaysNames={weekDaysNames}
            selectedDay={selectedDay}
            onChangeState={onChangeState}
          />
        ))}
      </div>
    </div>
  );
}

export default YearCalendar;
