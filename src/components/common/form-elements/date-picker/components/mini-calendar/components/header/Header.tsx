import React, { FC } from "react";
import { IDirections, IModes, IMonth, TMonth } from "types/date";

import styles from './header.module.scss';

interface HeaderProps {
  monthesNames: IMonth[];
  selectedYear: number;
  selectedMonth: TMonth;
  selectedYearsInterval: number[];
  mode: IModes;
  onClickArrow: (direction: IDirections) => void;
  setMode: (mode: IModes) => void;
}

const Header: FC<HeaderProps> = ({
  monthesNames,
  selectedYear,
  selectedMonth,
  selectedYearsInterval,
  mode,
  onClickArrow,
  setMode
}) => {
  const changeToPrev = () => onClickArrow('left');
  const changeToNext = () => onClickArrow('right');
  const changeModeToMonthes = () => setMode('monthes');
  const changeModeToYears = () => setMode('years');

  return (
    <div className={styles.header}>
      <div
        className={styles.header__arrow__icon}
        onClick={changeToPrev}
      >
        <i className="fas fa-chevron-left"></i>
      </div>

      {mode === 'month' && (
        <div onClick={changeModeToMonthes}>
          {monthesNames[selectedMonth.monthIndex].month} {selectedYear}
        </div>
      )}

      {mode === 'monthes' && (
        <div onClick={changeModeToYears}>
          {selectedYear}
        </div>
      )}

      {mode === 'years' && (
        <div>
          {selectedYearsInterval[0]} -{' '}
          {selectedYearsInterval[selectedYearsInterval.length - 1]}
        </div>
      )}

      <div
        className={styles.header__arrow__icon}
        onClick={changeToNext}
      >  
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
}

export default Header;