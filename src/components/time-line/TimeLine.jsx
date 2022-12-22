import React, { useEffect, useRef, useState } from 'react';
import propTypes from "prop-types";
import { getDateObj } from "../../utils/dateUtils";

const minute = 1000 * 60;

const TimeLine = ({ dataHour, dateDay }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const currentDateObj = getDateObj(currentDate);
  const dateDayObj = getDateObj(dateDay);
  
  const isCurrentYear = dateDayObj.year === currentDateObj.year;
  const isCurrentMonth = dateDayObj.month === currentDateObj.month;
  const isCurrentDay = dateDayObj.day === currentDateObj.day;
  const isCurrentHour = dataHour === currentDateObj.hours;
  
  if (!(isCurrentYear && isCurrentMonth && isCurrentDay && isCurrentHour)) {
    return null;
  }
 
  const timerId = useRef(null);
  const timeLineStyles = { top: `${currentDateObj.minutes}px` };
  
  const tick = () => setCurrentDate(new Date());
  
  const startTimer = () => {
    const delayForNextRender = minute - (currentDateObj.seconds * 1000);

    timerId.current = setTimeout(() => {
      clearTimeout(timerId.current);
      tick();
    }, delayForNextRender);
  }


  useEffect(() => {
    startTimer();
    return () => {
      clearTimeout(timerId.current);
    }
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

// import { getDateObj } from '../common/time.utils.js';

// let timerId;

// const createTimeLine = (offsetTop) => {
//   const timeLine = document.createElement('div');
//   timeLine.classList.add('time-line');
//   timeLine.style.top = offsetTop + "px";
//   return timeLine;
// }

// const removeTimerForTimeLine = () => {
//   const timeLine = document.querySelector('.time-line');
//   timeLine?.remove();
//   clearInterval(timerId);
// }

// export const renderTimeLine = () => {
//   removeTimerForTimeLine();

//   const { minutes, seconds, hours, day } = getDateObj(new Date());
//   const delayForNextRender = minute - (seconds * 1000);
  
//   const calendarTimeSlot = document.querySelector(
//     `[data-day="${day}"] [data-time="${hours}"]`
//   );

//   const timeLine = createTimeLine(minutes);
//   calendarTimeSlot && calendarTimeSlot.append(timeLine);
  
//   timerId = setInterval(renderTimeLine, delayForNextRender);
// };