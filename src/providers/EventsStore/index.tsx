import React, { FC, useReducer } from "react";
import { TPartialEvent } from "types/event";
import { EventsStoreContext } from "./EventsStore";
import { eventsReducer, initalState } from "./reducer";
import api from "gateway/events";
import { allActions } from "./actions";
import { IEventsStoreContextProps } from "./types";

export const EventsStoreProvider: FC = ({ children }) => {
  const [events, dispatch] = useReducer(eventsReducer, initalState);

  const addEvent = (newEvent: TPartialEvent) => (
    api.createEvent(newEvent)
      .then(event => dispatch(allActions.addEvent(event)))
  );

  const deleteEvent = (eventId: string) => (
    api.deleteEvent(eventId)
      .then(() => dispatch(allActions.deleteEvent(eventId)))
  );

  const updateEvent = (newEvent: TPartialEvent) => (
    api.createEvent(newEvent)
      .then(event => dispatch(allActions.addEvent(event)))
  );

  const fetchEvents = () => (
    api.getEvents()
      .then(events => dispatch(allActions.setEvents(events)))
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
