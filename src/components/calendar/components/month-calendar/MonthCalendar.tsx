import { useTypedSelector } from 'hooks/index';
import { useThrottle } from 'hooks/useThrottle';
import React, { FC, WheelEvent } from 'react';
import { IDirections, IMonthDay, IWeekDay, TMonth } from 'types/date';
import { getEventsInterval, getLongEvents, getShortEvents } from 'utils/helpers';
import Month from './components/month/Month';
import Navigation from './components/navigation/Navigation';

import styles from './month-calendar.module.scss';

interface IMonthCalendarProps {
  weekDaysNames: IWeekDay[];
  calendarDaysOfMonth: IMonthDay[];
  selectedMonth: TMonth;
  onClickArrow: (direction: IDirections) => void;
}

const MonthCalendar: FC<IMonthCalendarProps> = ({
  weekDaysNames,
  calendarDaysOfMonth,
  selectedMonth,
  onClickArrow
}) => {
  const { events } = useTypedSelector(({ events }) => events);

  const monthEvents = getEventsInterval(calendarDaysOfMonth, events);
  const shortEvents = getShortEvents(monthEvents);
  const longEvents = getLongEvents(monthEvents);
  
  const changeMonth = useThrottle((e: WheelEvent<HTMLElement>) => {
      const { deltaY } = e;
      const direction = deltaY > 0 ? 'right' : 'left';
      onClickArrow(direction);
  }, 300);
  
  return (
    <div
      className={styles.calendar__container} 
      onWheel={changeMonth}
    >
      <Navigation weekDaysNames={weekDaysNames} />
      <div className="calendar__body">
        <div className={styles.calendar__content}>
          <Month
            calendarDaysOfMonth={calendarDaysOfMonth}
            selectedMonth={selectedMonth}
            shortEvents={shortEvents}
            longEvents={longEvents}
          />
        </div>
      </div>
    </div>
  );
}

export default MonthCalendar;
