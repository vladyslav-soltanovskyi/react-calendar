import React, { FC } from 'react';
import { useModal } from 'hooks/index';
import { getDisplayedMonth, changeDaysForDate } from 'utils/date';

import './header.scss';

interface HeaderProps {
  weekStartDate: Date;
  setWeekStartDate: (date: Date) => void;
}

const Header: FC<HeaderProps> = ({ weekStartDate, setWeekStartDate }) => {
  const { openModal } = useModal();
  
  const changeToPrevWeek = () => setWeekStartDate(changeDaysForDate(weekStartDate, -7));

  const changeToNextWeek = () => setWeekStartDate(changeDaysForDate(weekStartDate, 7));

  const changeToCurrentWeek = () => setWeekStartDate(new Date());

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={openModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={changeToCurrentWeek}
        >
          Today</button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={changeToPrevWeek}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={changeToNextWeek}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{getDisplayedMonth(weekStartDate)}</span>
      </div>
    </header>
  );
};

export default Header;
