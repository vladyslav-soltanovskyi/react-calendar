import React, { useEffect, useRef, useState } from 'react';
import propTypes from "prop-types";
import { checkIsToday, getDateObj } from "../../utils/date";

const minute = 1000 * 60;

const TimeLine = ({ dataHour, dateDay }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { hours, minutes, seconds } = getDateObj(currentDate);
  const isCurrentHour = dataHour === hours;
  
  if (!(checkIsToday(dateDay) && isCurrentHour)) {
    return null;
  }
 
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

  return (
    <div className="time-line" style={timeLineStyles}></div>
  );
}

TimeLine.propTypes = {
  dataHour: propTypes.number,
  dateDay: propTypes.instanceOf(Date)
}

export default TimeLine;
