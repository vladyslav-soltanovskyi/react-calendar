import { IEvent } from "types/event";
import { ACTIONS, TypedActions } from "./types";

export const allActions = {
  addEvent: (newEvent: IEvent) => ({ type: ACTIONS.addEvent, payload: { newEvent } }),
  deleteEvent: (eventId: string) => ({ type: ACTIONS.deleteEvent, payload: { eventId } }),
  updateEvent: (eventId: string, updatedEvent: IEvent) => ({ type: ACTIONS.updateEvent, payload: { eventId, updatedEvent } }),
  setEvents: (events: IEvent[]) => ({ type: ACTIONS.setEvents, payload: { events } }),
}

export const allTypedActions = allActions as TypedActions; 