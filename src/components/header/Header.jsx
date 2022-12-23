import React from 'react';
import propTypes from "prop-types";
import { useModal } from '../../hooks';
import { getDisplayedMonth, changeDaysForDate } from '../../utils/date';

import './header.scss';

const Header = ({ weekStartDate, setWeekStartDate }) => {
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

Header.propTypes = {
  weekDates: propTypes.instanceOf(Date),
  setWeekStartDate: propTypes.func
}

export default Header;
