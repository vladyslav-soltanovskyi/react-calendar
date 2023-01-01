import React, { FC, useState } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';

import { getWeekStartDate, generateWeekRange } from './utils/date';

import './common.scss';

const App: FC = () => {
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
