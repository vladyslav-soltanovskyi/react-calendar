import React, { useEffect, FC } from 'react';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { useEventsStore } from 'hooks/index';

import './calendar.scss';

interface CalendarProps {
  weekDates: Date[];
}

const Calendar: FC<CalendarProps> = ({ weekDates }) => {
  const { events, fetchEvents } = useEventsStore();
  useEffect(() => {
    fetchEvents()
  }, []);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={events} />
        </div>
      </div>
    </section>
  );
}

export default Calendar;
