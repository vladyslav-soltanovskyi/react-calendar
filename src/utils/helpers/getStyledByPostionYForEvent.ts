import { IEvent } from "types/event";
import { checkDateIsEqual, formatDate, shmoment } from "utils/date";

export const getStyledByPostionYForEvent = (event: IEvent, dateDay: Date) => {
  const { start, end } = event;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const formattedStartTime = formatDate(startDate, 'hh:mm');
  const formattedEndTime = formatDate(endDate, 'hh:mm');

  const time = `${formattedStartTime} - ${formattedEndTime}`;
  const nextDay = shmoment(dateDay).add('days', 1).result();

  //calculating event height = duration of event in minutes
  let eventHeight = (endDate.getTime() - startDate.getTime()) / (1000 * 60);
  let offsetTop = startDate.getMinutes();

  if (!checkDateIsEqual(startDate, endDate)) {
    if (startDate.getDate() < dateDay.getDate()) {
      eventHeight = (endDate.getTime() - dateDay.getTime()) / (1000 * 60);
      offsetTop = 0;
    }
    else {
      eventHeight = (nextDay.getTime() - startDate.getTime()) / (1000 * 60);
    }
  }

  return { eventHeight, offsetTop, time };
}