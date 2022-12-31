import React from 'react';
import propTypes from "prop-types";
import { checkIsToday, getDateObj } from "../../utils/date";

import "./TimeLine.scss";

const minute = 1000 * 60;

const TimeLine = ({ dataHour, dateDay }) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const { hours, minutes, seconds } = getDateObj(currentDate);
  const isCurrentHour = dataHour === hours;
  
  const timerId = React.useRef(null);
  const timeLineStyles = { top: `${minutes}px` };
  
  const tick = () => setCurrentDate(new Date());
  
  const startTimer = () => {
    const delayForNextRender = minute - (seconds * 1000);
    
    timerId.current = setTimeout(tick, delayForNextRender);
  }
  
  React.useEffect(() => {
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

TimeLine.propTypes = {
  dataHour: propTypes.number,
  dateDay: propTypes.instanceOf(Date)
}

export default TimeLine;
