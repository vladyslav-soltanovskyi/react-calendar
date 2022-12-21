import { createContext } from "react";

export const EventsStoreContext = createContext({
  addEvent: (newEvent) => {},
  removeEvent: (eventId) => {}, 
  updateEvent: (eventId, updatedEvent) => {},
  setEvents: (events) => {},
  dispatch: (action) => {},
  events: []
});
