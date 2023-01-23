import React, { FC } from 'react';
import Select from '../select/Select';
import { useModal } from 'hooks/index';
import { IDirections, IModes, TDate } from 'types/date';
import { createDate, getNextStartMinutes, shmoment } from 'utils/date';
import cn from 'classnames';

import styles from './header.module.scss';

interface IHeaderProps {
  onClickArrow: (direction: IDirections) => void;
  displayedDate: string;
  onChangeOption: (option: IModes) => void;
  selectedOption: string;
  selectedDay: TDate;
}

const modes = ['week', 'month', 'year']

const Header: FC<IHeaderProps> = ({
  onClickArrow,
  displayedDate,
  onChangeOption,
  selectedOption,
  selectedDay
}) => {
  const {
    isOpenModalCreateEvent,
    isOpenModalDayInfoEvents,
    isOpenModalEditEvent,
    openModalCreate
  } = useModal();


  const isBtnCreateEventDisable = isOpenModalCreateEvent || isOpenModalDayInfoEvents || isOpenModalEditEvent;
  
  const changeToPrev = () => onClickArrow('left');
  const changeToNext = () => onClickArrow('right');
  const changeToToday = () => onClickArrow('today');

  const handleOpenModal = () => {
    const date = new Date();
    const { hours, minutes } = createDate({ date: date });
    const startMins = getNextStartMinutes(minutes);
    const selectedDate = shmoment(selectedDay.date)
      .set('hours', hours)
      .set('minutes', startMins + minutes)
      .result();

    openModalCreate({ selectedDate });
  }
  
  return (
    <header className={styles.header}>
      <button
        className={styles.create__btn}
        onClick={handleOpenModal}
        disabled={isBtnCreateEventDisable}
      >
        <svg width="30" height="30" viewBox="3 3 30 30">
          <path fill="#34A853" d="M16 16v14h4V20z"></path>
          <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
          <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
          <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
          <path fill="none" d="M0 0h32v32H0z"></path>
        </svg>
      </button>
      <div className={styles.navigation}>
        <button
          className={cn(styles.navigation__today__btn, "button")}
          onClick={changeToToday}
        >
          Today</button>
        <div className={styles.navigation__body}>
          <div className={styles.navigation__icons}>
            <button
              className={cn("icon-button", styles.navigation__icon)}
              onClick={changeToPrev}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className={cn("icon-button", styles.navigation__icon)}
              onClick={changeToNext}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <span className={styles.navigation__date}>{displayedDate}</span>
        </div>
      </div>
      <Select
        onChangeOption={onChangeOption}
        options={modes}
        selectedOption={selectedOption}
      />
    </header>
  );
};

export default Header;
