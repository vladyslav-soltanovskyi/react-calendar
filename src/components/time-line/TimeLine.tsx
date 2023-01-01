import React, { FC, useEffect, useRef, useState } from 'react';
import { checkIsToday, getDateObj } from "utils/date";

import "./time-line.scss";

const minute = 1000 * 60;

interface TimeLineProps {
  dataHour: number;
  dateDay: Date;
}

const TimeLine: FC<TimeLineProps> = ({ dataHour, dateDay }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { hours, minutes, seconds } = getDateObj(currentDate);
  const isCurrentHour = dataHour === hours;
  
  const timerId = useRef(null);
  const timeLineStyles = { top: `${minutes}px` };
  
  const tick = () => setCurrentDate(new Date());
  
  const startTimer = () => {
    const delayForNextRender = minute - (seconds * 1000);
    
    timerId.current = setTimeout(tick, delayForNextRender);
  }
  
  useEffect(() => {
    startTimer();
    return () => clearTimeout(timerId.current)
  }, [currentDate]);

  if (!(checkIsToday(dateDay) && isCurrentHour)) {
    return null;
  }
  
  return (
    <div className="time-line" style={timeLineStyles}></div>
  );
}

export default TimeLine;
