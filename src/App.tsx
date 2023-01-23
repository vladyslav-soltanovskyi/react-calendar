import React, { FC, useEffect } from 'react';
import Calendar from './components/calendar/Calendar';
import { useActions } from './hooks';

import './common.scss';

const App: FC = () => {
  const { getEvents } = useActions();

  useEffect(() => {
    getEvents();
  }, []);
  
  return (
    <Calendar />
  );
}

export default App;
