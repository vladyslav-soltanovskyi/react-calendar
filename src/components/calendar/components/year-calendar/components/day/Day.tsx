import React, { FC, MouseEvent } from 'react';
import { IMonthDay, TDate } from 'types/date';
import { checkDateIsEqual, checkIsToday } from 'utils/date';
import { useModal } from 'hooks/useModal';
import cn from 'classnames';

import styles from './day.module.scss';

interface IDayProps {
  day: IMonthDay;
  monthIndex: number;
  selectedDay: TDate;
  onChangeState: (date: Date) => void;
}

const Day: FC<IDayProps> = ({
  day,
  monthIndex,
  selectedDay,
  onChangeState
}) => {
  const { openModalDayInfo } = useModal();
  const handleSelectDay = () => onChangeState(day.date);
  const isAdditionalDay = day.monthIndex !== monthIndex;

  const handleOpenModalDayInfo = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    openModalDayInfo(day.date);
  }

  return (
    <div
      className={styles.day}
      onClick={handleOpenModalDayInfo}
    >
      <div
        className={cn(styles.day__label, {
          [styles.day__label_active]: checkIsToday(day.date),
          [styles.day__label_additional]: isAdditionalDay,
          [styles.day__label_selected]: !isAdditionalDay && checkDateIsEqual(day.date, selectedDay.date),
        })}
        onClick={handleSelectDay}
      >
        {day.dayNumber}
      </div>
    </div>
  );
}

export default Day;
