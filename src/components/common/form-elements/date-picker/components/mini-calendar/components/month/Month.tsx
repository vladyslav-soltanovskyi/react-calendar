import cn from "classnames";
import React, { FC } from "react";
import { IModes, IMonth, TMonth } from "types/date";

import styles from './month.module.scss';

interface MonthProps {
  monthesName: IMonth;
  selectedYear: number;
  selectedMonth: TMonth;
  setSelectedMonthByIndex: (monthIndex: number) => void;
  setMode: (mode: IModes) => void;
}

const Month: FC<MonthProps> = ({
  monthesName,
  selectedYear,
  selectedMonth,
  setSelectedMonthByIndex,
  setMode
}) => {
  const d = new Date();
  const isCurrentMonth =
    d.getMonth() === monthesName.monthIndex &&
    selectedYear === d.getFullYear();

  const isSelectedMonth = monthesName.monthIndex === selectedMonth.monthIndex &&
    selectedYear === monthesName.date.getFullYear();
    
  const handleSelectMonth = () => {
    setSelectedMonthByIndex(monthesName.monthIndex);
    setMode('month');
  }

  return (
    <div
      key={monthesName.month}
      aria-hidden
      onClick={handleSelectMonth}
      className={cn(styles.month, {
        [styles.month_selected]: isSelectedMonth,
        [styles.month_today]: isCurrentMonth
      })}
    >
      {monthesName.monthShort}
    </div>
  );
};

export default Month;