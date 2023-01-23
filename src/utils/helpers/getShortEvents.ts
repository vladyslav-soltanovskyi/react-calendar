import { IEvent } from "types/event";
import { getDifferenceOfTwoDates } from "utils/date";

export const getShortEvents = (events: IEvent[]) => {
  const shortEvents = events.filter(({ start, end, type }) => {
    const { days } = getDifferenceOfTwoDates(new Date(start), new Date(end));
    return type !== 'long-event' && days < 1;
  });
  
  return shortEvents;
}