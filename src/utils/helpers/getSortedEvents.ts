import { IEvent } from "types/event";

export const getSortedEvents = (events: IEvent[]) => {
  const sortedEvents = events.sort((prevEvent, nextEvent) => {
    const prevEventDate = new Date(prevEvent.start);
    const nextEventDate = new Date(nextEvent.start);
    return prevEventDate.getTime() - nextEventDate.getTime();
  });

  return sortedEvents;
}