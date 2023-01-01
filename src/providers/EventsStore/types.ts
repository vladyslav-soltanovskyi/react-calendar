import { IEvent, TPartialEvent } from "types/event"

export enum ACTIONS {
  ADD_EVENT = "ADD_EVENT",
  DELETE_EVENT = "DELETE_EVENT",
  UPDATE_EVENT = "UPDATE_EVENT",
  SET_EVENTS = "SET_EVENTS"
}

export type ActionDeleteEvent = {
  type: ACTIONS.DELETE_EVENT;
  payload: {
    eventId: string;
  };
};

export type ActionAddEvent = {
  type: ACTIONS.ADD_EVENT;
  payload: {
    newEvent: IEvent;
  };
};

export type ActionSetEvents = {
  type: ACTIONS.SET_EVENTS;
  payload: {
    events: IEvent[];
  };
};

export type ActionUpdateEvent = {
  type: ACTIONS.UPDATE_EVENT;
  payload: {
    eventId: string;
    updatedEvent: IEvent;
  };
};

export type AllActions = ActionDeleteEvent | ActionAddEvent | ActionSetEvents | ActionUpdateEvent;

export interface IEventsStoreContextProps {
  events: IEvent[];
  addEvent: (newEvent: TPartialEvent) => Promise<void>;
  deleteEvent: (eventId: string) => Promise<void>;
  updateEvent: (newEvent: TPartialEvent) => Promise<void>;
  fetchEvents: () => Promise<void>;
}