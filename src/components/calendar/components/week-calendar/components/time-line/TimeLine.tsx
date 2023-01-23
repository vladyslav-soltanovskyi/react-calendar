import React, { FC, useEffect, useRef } from 'react';
import { createDate } from "utils/date";

import styles from "./time-line.module.scss";

const MINUTE_IN_MILLISECONDS = 1000 * 60;

interface ITimeLineProps {
  setCurrentDate: (date: Date) => void;
  currentDate: Date;
}

const TimeLine: FC<ITimeLineProps> = ({ currentDate, setCurrentDate }) => {
  const { minutes, seconds } = createDate({ date: currentDate });
  
  const timerId = useRef(null);
  const timeLineStyles = { top: `${minutes}px` };
  
  const tick = () => setCurrentDate(new Date());
  
  const startTimer = () => {
    const delayForNextRender = MINUTE_IN_MILLISECONDS - (seconds * 1000);
    
    timerId.current = setTimeout(tick, delayForNextRender);
  }
  
  useEffect(() => {
    startTimer();
    return () => clearTimeout(timerId.current)
  }, [currentDate]);
  
  return (
    <div
      className={styles.time__line}
      style={timeLineStyles}
    />
  );
}

export default TimeLine;
