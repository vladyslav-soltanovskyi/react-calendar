import React, { useReducer } from "react";
import { EventsStoreContext } from "./EventsStore";

const initalState = [];

const actions = {
  ADD_EVENT: "ADD_EVENT",
  DELETE_EVENT: "DELETE_EVENT",
  UPDATE_EVENT: "UPDATE_EVENT",
  SET_EVENTS: "SET_EVENTS"
}

export const addEvent = (newEvent) => ({ type: actions.ADD_EVENT, payload: { newEvent } });

export const deleteEvent = (eventId) =>  ({ type: actions.DELETE_EVENT, payload: { eventId } });

export const updateEvent = (eventId, updatedEvent) => ({ type: actions.UPDATE_EVENT, payload: { eventId, updatedEvent } });

export const setEvents = (events) => ({ type: actions.SET_EVENTS, payload: { events } });

export function eventsReducer(state = initalState, action) {
  switch (action.type) {
    case actions.ADD_EVENT: {
      const { newEvent } = action.payload;
      return [...state, newEvent];
    }
    case actions.DELETE_EVENT: {
      const { eventId } = action.payload;
      return state.filter(event => event.id !== eventId);
    }
    case actions.UPDATE_EVENT: {
      const { eventId, updatedEvent } = action.payload;
      return state.map(event => event.id === eventId ? updatedEvent : event);
    }
    case actions.SET_EVENTS: {
      return action.payload.events;
    }
    default: {
      return state;
    }
  }
}

export const EventsStoreProvider = ({ children }) => {
  const [events, dispatch] = useReducer(eventsReducer, initalState);

  const eventsValue = {
    events,
    dispatch,
    addEvent,
    deleteEvent,
    updateEvent,
    setEvents
  };

  return (
    <EventsStoreContext.Provider value={eventsValue}>
      {children}
    </EventsStoreContext.Provider>
  );
};
