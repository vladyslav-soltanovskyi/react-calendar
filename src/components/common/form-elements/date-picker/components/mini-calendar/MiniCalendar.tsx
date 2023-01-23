import React, { FC } from "react";
import { IDirections, IModes, IMonth, IMonthDay, IWeekDay, TMonth } from "types/date";
import Header from "./components/header/Header";
import Days from "./components/days/Days";
import Years from "./components/years/Years";
import Monthes from "./components/monthes/Monthes";

import styles from './mini-calendar.module.scss';

interface MiniCalendarProps {
  monthesNames: IMonth[];
  selectedYear: number;
  selectedMonth: TMonth;
  weekDaysNames: IWeekDay[];
  calendarDaysOfMonth: IMonthDay[];
  selectedDate: Date;
  selectedYearsInterval: number[];
  mode: IModes;
  onClickArrow: (direction: IDirections) => void;
  selectDay: (date: Date) => void;
  setMode: (mode: IModes) => void;
  setSelectedMonthByIndex: (monthIndex: number) => void;
  setSelectedYear: (year: number) => void;
}

const MiniCalendar: FC<MiniCalendarProps> = ({
  monthesNames,
  selectedYear,
  selectedMonth,
  weekDaysNames,
  calendarDaysOfMonth,
  selectedDate,
  selectedYearsInterval,
  mode,
  onClickArrow,
  selectDay,
  setMode,
  setSelectedMonthByIndex,
  setSelectedYear
}) => {
  return (
    <div className={styles.mini__calendar}>
      <Header
        onClickArrow={onClickArrow}
        monthesNames={monthesNames}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        selectedYearsInterval={selectedYearsInterval}
        mode={mode}
        setMode={setMode}
      />
      <div className={styles.mini__calendar__body}>
        {mode === 'month' && (
          <Days
            selectDay={selectDay}
            selectedMonth={selectedMonth}
            weekDaysNames={weekDaysNames}
            calendarDaysOfMonth={calendarDaysOfMonth}
            selectedDate={selectedDate}          
          />
        )}
        {mode === 'monthes' && (
          <Monthes
            selectedMonth={selectedMonth}
            monthesNames={monthesNames}
            selectedYear={selectedYear}
            setSelectedMonthByIndex={setSelectedMonthByIndex}
            setMode={setMode}
          />
        )}
        {mode === 'years' && (
          <Years
            selectedYearsInterval={selectedYearsInterval}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            setMode={setMode}
            onClickArrow={onClickArrow}
          />
        )}
      </div>
    </div>
  );
};

export default MiniCalendar;