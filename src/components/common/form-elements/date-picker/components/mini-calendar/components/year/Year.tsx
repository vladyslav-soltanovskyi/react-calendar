import cn from "classnames";
import React, { FC } from "react";
import { IModes } from "types/date";

import styles from './year.module.scss';

interface YearProps {
  year: number;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  setMode: (mode: IModes) => void;
}

const Year: FC<YearProps> = ({
  year,
  selectedYear,
  setSelectedYear,
  setMode
}) => {
  const isCurrentYear = new Date().getFullYear() === year;
  const isSelectedYear = year === selectedYear;

  const handleSelectYear = () => {
    setSelectedYear(year);
    setMode('monthes');
  }

  return (
    <div
      key={year}
      aria-hidden
      onClick={handleSelectYear}
      className={cn(styles.year, {
        [styles.year_today]: isCurrentYear,
        [styles.year_selected]: isSelectedYear
      })}
    >
      {year}
    </div>
  );
};

export default Year;