import { IEvent } from "types/event";
import { checkIsEventsShowInCurrentInterval } from "./checkIsEventsShowInCurrentInterval";

export const getStyledByPositionXForEvent = (dayEvents: IEvent[], currentEvent: IEvent) => {
  const filteredEvents = dayEvents.filter(dayEvent => {
    const startDateCurrentEvent = new Date(currentEvent.start);
    const endDateCurrentEvent = new Date(currentEvent.end);
    const startDateDayEvent = new Date(dayEvent.start);
    const endDateDayEvent = new Date(dayEvent.end);

    return checkIsEventsShowInCurrentInterval(startDateCurrentEvent, endDateCurrentEvent, startDateDayEvent, endDateDayEvent);
  });

  const sortedDayEvents = filteredEvents.sort((prevEvent, nextEvent) => {
    const prevEventDate = new Date(prevEvent.start);
    const nextEventDate = new Date(nextEvent.start);
    
    return prevEventDate.getTime() - nextEventDate.getTime();
  });
  
  const eventIndx = sortedDayEvents.findIndex(event => event.id === currentEvent.id);
  const eventsLength = sortedDayEvents.length;

  const left = `calc(90% * ${ eventIndx / eventsLength })`;
  const width = `calc(90% - (90% * ${ eventIndx / eventsLength }))`;

  return { left, width }
}