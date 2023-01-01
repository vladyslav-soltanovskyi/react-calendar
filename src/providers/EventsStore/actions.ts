import { IEvent, TPartialEvent } from "types/event";
import { ACTIONS, ActionAddEvent, ActionDeleteEvent, ActionSetEvents, ActionUpdateEvent } from "./types";

export const allActions = {
  addEvent: (newEvent: IEvent): ActionAddEvent => ({ type: ACTIONS.ADD_EVENT, payload: { newEvent } }),
  deleteEvent: (eventId: string): ActionDeleteEvent =>  ({ type: ACTIONS.DELETE_EVENT, payload: { eventId } }),
  updateEvent: (eventId: string, updatedEvent: IEvent): ActionUpdateEvent => ({ type: ACTIONS.UPDATE_EVENT, payload: { eventId, updatedEvent } }),
  setEvents: (events: IEvent[]): ActionSetEvents => ({ type: ACTIONS.SET_EVENTS, payload: { events } }),
}