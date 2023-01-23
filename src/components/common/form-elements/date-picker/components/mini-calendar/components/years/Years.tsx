import React, { FC } from "react";
import { IDirections, IModes } from "types/date";
import Year from "../year/Year";

import styles from './years.module.scss';

interface YearsProps {
  selectedYearsInterval: number[];
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  setMode: (mode: IModes) => void;
  onClickArrow: (direction: IDirections) => void;
}

const Years: FC<YearsProps> = ({
  selectedYearsInterval,
  selectedYear,
  setSelectedYear,
  setMode,
  onClickArrow
}) => {
  const handleSelectPrevYearsInterval = () => {
    onClickArrow('left');
    setSelectedYear(selectedYearsInterval[0] - 1);
    setMode('monthes');
  }

  const handleSelectNextYearsInterval = () => {
    onClickArrow('right');
    setSelectedYear(selectedYearsInterval[selectedYearsInterval.length - 1] + 1);
    setMode('monthes');
  }

  return (
    <div className={styles.years__container}>
      <div
        className={styles.year_additional}
        onClick={handleSelectPrevYearsInterval}
      >
        {selectedYearsInterval[0] - 1}
      </div>
      {selectedYearsInterval.map((year) => (
        <Year
          key={year}
          year={year}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          setMode={setMode}
        />
      ))}
      <div
        className={styles.year_additional}
        onClick={handleSelectNextYearsInterval}
      >
        {selectedYearsInterval[selectedYearsInterval.length - 1] + 1}
      </div>
    </div>
  );
};

export default Years;