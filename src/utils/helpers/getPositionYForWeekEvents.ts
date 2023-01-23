import { IEvent } from "types/event";
import { getPositionYForDayEvents } from "./getPositionYForDayEvents";

export const getPositionYForWeekEvents = (sortedWeekEvents: IEvent[][]) => {
  const eventsPositionY = sortedWeekEvents.reduce((eventsPositionY, dayEvents, indx) => {
    const prevEventsPositionY = !!eventsPositionY[indx - 1] ? eventsPositionY[indx - 1] : [];
    const eventsDayPositionY = getPositionYForDayEvents(dayEvents, prevEventsPositionY);
    
    eventsPositionY.push(eventsDayPositionY);

    return eventsPositionY;
  }, [] as string[][]);

  return eventsPositionY;
}