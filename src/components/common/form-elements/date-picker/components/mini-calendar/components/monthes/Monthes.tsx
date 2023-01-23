import React, { FC } from "react";
import { IModes, IMonth, TMonth } from "types/date";
import Month from "../month/Month";

import styles from './monthes.module.scss';

interface MonthesProps {
  monthesNames: IMonth[];
  selectedYear: number;
  selectedMonth: TMonth;
  setSelectedMonthByIndex: (monthIndex: number) => void;
  setMode: (mode: IModes) => void;
}

const Monthes: FC<MonthesProps> = ({
  monthesNames,
  selectedYear,
  selectedMonth,
  setSelectedMonthByIndex,
  setMode
}) => {
  return (
    <div className={styles.monthes__container}>
      {monthesNames.map((monthesName) => (
        <Month
          key={monthesName.month}
          monthesName={monthesName}
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          setSelectedMonthByIndex={setSelectedMonthByIndex}
          setMode={setMode}
        />
      ))}
    </div>
  );
};

export default Monthes;