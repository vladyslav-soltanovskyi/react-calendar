import { createContext } from "react";
import { TPartialEvent } from "types/event";
import { IEventsStoreContextProps } from "./types";

export const EventsStoreContext = createContext<IEventsStoreContextProps>({
  addEvent: (newEvent: TPartialEvent) => Promise.resolve(),
  deleteEvent: (eventId: string) => Promise.resolve(),
  updateEvent: (newEvent: TPartialEvent) => Promise.resolve(),
  fetchEvents: () => Promise.resolve(),
  events: []
});
