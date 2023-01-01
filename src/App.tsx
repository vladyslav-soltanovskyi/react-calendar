import React, { FC, useEffect, useState } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import { getWeekStartDate, generateWeekRange } from './utils/date';
import { useEventsStore } from './hooks';

import './common.scss';

const App: FC = () => {
  const { fetchEvents } = useEventsStore();
  
  useEffect(() => {
    fetchEvents();
  }, []);

  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header weekStartDate={weekStartDate} setWeekStartDate={setWeekStartDate} />
      <Calendar weekDates={weekDates} />
    </>
  );
}

export default App;
