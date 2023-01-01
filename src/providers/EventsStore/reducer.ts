import { IEvent } from "types/event";
import { ACTIONS, Actions } from "./types";

export const initalState: IEvent[] = [];

export function eventsReducer(state = initalState, action: Actions) {
  switch (action.type) {
    case ACTIONS.addEvent: {
      const { newEvent } = action.payload;
      return [...state, newEvent];
    }
    case ACTIONS.deleteEvent: {
      const { eventId } = action.payload;
      return state.filter(event => event.id !== eventId);
    }
    case ACTIONS.updateEvent: {
      const { eventId, updatedEvent } = action.payload;
      return state.map(event => event.id === eventId ? updatedEvent : event);
    }
    case ACTIONS.setEvents: {
      return action.payload.events;
    }
    default: {
      return state;
    }
  }
}