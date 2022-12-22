import { createContext } from "react";

export const EventsStoreContext = createContext({
  addEvent: (newEvent) => {},
  deleteEvent: (eventId) => {}, 
  updateEvent: (eventId, updatedEvent) => {},
  setEvents: (events) => {},
  dispatch: (action) => {},
  events: []
});
