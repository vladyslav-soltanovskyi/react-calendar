import React, { FC } from 'react';
import cn from "classnames";
import { checkIsToday, checkIsPast } from 'utils/date';
import { IMonthDay, IWeekDay } from 'types/date';
import { useModal } from 'hooks/useModal';

import styles from './navigation.module.scss';

interface INavigationProps {
  weekDays: IMonthDay[];
  weekDaysNames: IWeekDay[];
}

const Navigation: FC<INavigationProps> = ({
  weekDays,
  weekDaysNames
}) => {
  const { openModalCreate } = useModal();
  return (
    <header className={styles.week__header}>
      {weekDays.map((dayDate, i) => {
        const { dayNumber, year, monthIndex, date } = dayDate;
        const uniqKey = `${year}-${monthIndex}-${dayNumber}`;
        
        const isPastDay = checkIsPast(date);
        const isTodayDay = checkIsToday(date);

        return (
          <div
            className={styles.day__label}
            key={uniqKey}
            onClick={() => openModalCreate({ selectedDate: dayDate.date, type: 'long-event' })}
          >
            <span
              className={cn(styles.day__label___name, {
                [styles.day__label__name_today]: isTodayDay
              })}
            >
              {weekDaysNames[i].dayShort}</span>
            <span
              className={cn(styles.day__label__number, {
                [styles.day__label__number_today]: isTodayDay,
                [styles.day__label__number_past]: isPastDay
              })}
            >
              {dayNumber}</span>
          </div>
        )
      })}
    </header>
  );
};

export default Navigation;
