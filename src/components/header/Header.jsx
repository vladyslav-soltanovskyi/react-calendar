import React from 'react';
import { getDisplayedMonth } from '../../utils/dateUtils';

import './header.scss';

const changeDayForDate = (date, days) => {
  const result = new Date(date);
  return new Date(
    result.setDate(result.getDate() + days)
  );
}

const Header = ({ weekStartDate, setWeekStartDate }) => {
  const changeToPrevWeek = () => setWeekStartDate(changeDayForDate(weekStartDate, -7));

  const changeToNextWeek = () => setWeekStartDate(changeDayForDate(weekStartDate, 7));

  const changeToCurrentWeek = () => setWeekStartDate(new Date());

  return (
    <header className="header">
      <button className="button create-event-btn">
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
