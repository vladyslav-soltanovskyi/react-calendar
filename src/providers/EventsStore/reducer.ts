import { IEvent } from "types/event";
import { ACTIONS, AllActions } from "./types";

export const initalState: IEvent[] = [];

export function eventsReducer(state = initalState, action: AllActions) {
  switch (action.type) {
    case ACTIONS.ADD_EVENT: {
      const { newEvent } = action.payload;
      return [...state, newEvent];
    }
    case ACTIONS.DELETE_EVENT: {
      const { eventId } = action.payload;
      return state.filter(event => event.id !== eventId);
    }
    case ACTIONS.UPDATE_EVENT: {
      const { eventId, updatedEvent } = action.payload;
      return state.map(event => event.id === eventId ? updatedEvent : event);
    }
    case ACTIONS.SET_EVENTS: {
      return action.payload.events;
    }
    default: {
      return state;
    }
  }
}