import { IMonthDay } from "types/date";
import { IEvent } from "types/event";
import { shmoment } from "utils/date";
import { checkIsEventsShowInCurrentInterval } from './checkIsEventsShowInCurrentInterval';
import { getSortedEvents } from "./getSortedEvents";

export const getSortedWeekEvents = (weekDays: IMonthDay[], weekEvents: IEvent[]) => {
  let maxEventsInWeek = 0;

  const sortedWeekEvents = weekDays.map((day) => {
    const dayEvents = weekEvents.filter(event => {
      const startDate = new Date(event.start);
      const endDate = new Date(event.end);
      const nextDay = shmoment(day.date).add('hours', 23).add('minutes', 59).result();
  
      return checkIsEventsShowInCurrentInterval(day.date, nextDay, startDate, endDate);
    });
    
    const sortedDayEvents = getSortedEvents(dayEvents);

    if (maxEventsInWeek < sortedDayEvents.length) {
      maxEventsInWeek = sortedDayEvents.length;
    }

    return sortedDayEvents;
  });

  return { sortedWeekEvents, maxEventsInWeek }
}