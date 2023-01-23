import React, { FC } from 'react';
import { useTypedSelector } from 'hooks/index';
import { IMonthDay, IWeekDay } from 'types/date';
import { getEventsInterval, getLongEvents, getShortEvents } from 'utils/helpers';
import Navigation from './components/navigation/Navigation';
import Week from './components/week/Week';
import Sidebar from './components/sidebar/Sidebar';
import LongEvents from './components/long-events/LongEvents';

import styles from './week-calendar.module.scss';

interface IWeekCalendarProps {
  weekDays: IMonthDay[];
  weekDaysNames: IWeekDay[];
}

const WeekCalendar: FC<IWeekCalendarProps> = ({ weekDays, weekDaysNames }) => {
  const { events } = useTypedSelector(({ events }) => events);
  
  const weekEvents = getEventsInterval(weekDays, events);
  const shortEvents = getShortEvents(weekEvents);
  const longEvents = getLongEvents(weekEvents);
  
  return (
    <>
      <div className={styles.calendar__week__header__container}>
        <Navigation
          weekDays={weekDays}
          weekDaysNames={weekDaysNames}
        />
        <LongEvents
          weekDays={weekDays}
          events={longEvents}
        />
      </div>
      <div className="calendar__body">
        <div className={styles.calendar__week__container}>
          <Sidebar />
          <Week
            events={shortEvents}
            weekDays={weekDays}
          />
        </div>
      </div>
    </>
  );
}

export default WeekCalendar;
