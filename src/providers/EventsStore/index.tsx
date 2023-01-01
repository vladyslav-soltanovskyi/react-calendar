import React, { FC, useReducer } from "react";
import { TPartialEvent } from "types/event";
import { EventsStoreContext } from "./context";
import { eventsReducer, initalState } from "./reducer";
import { allTypedActions } from "./actions";
import { IEventsStoreContextProps } from "./types";
import api from "gateway/events";

export const EventsStoreProvider: FC = ({ children }) => {
  const [events, dispatch] = useReducer(eventsReducer, initalState);

  const addEvent = (newEvent: TPartialEvent) => (
    api.createEvent(newEvent)
      .then(event => dispatch(allTypedActions.addEvent(event)))
  );

  const deleteEvent = (eventId: string) => (
    api.deleteEvent(eventId)
      .then(() => dispatch(allTypedActions.deleteEvent(eventId)))
  );

  const updateEvent = (newEvent: TPartialEvent) => (
    api.createEvent(newEvent)
      .then(event => dispatch(allTypedActions.addEvent(event)))
  );

  const fetchEvents = () => (
    api.getEvents()
      .then(events => dispatch(allTypedActions.setEvents(events)))
  );

  const eventsValue: IEventsStoreContextProps = {
    events,
    addEvent,
    deleteEvent,
    updateEvent,
    fetchEvents
  };

  return (
    <EventsStoreContext.Provider value={eventsValue}>
      {children}
    </EventsStoreContext.Provider>
  );
};
