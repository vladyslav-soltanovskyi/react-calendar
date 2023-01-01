import { IEvent, TPartialEvent } from "types/event"
import { allActions } from "./actions";

export const enum ACTIONS {
  addEvent = "addEvent",
  deleteEvent = "deleteEvent",
  updateEvent = "updateEvent",
  setEvents = "setEvents"
}

type ActionsMap = typeof allActions;

export type TypedActions = {
  [Key in keyof ActionsMap]: (...p: Parameters<ActionsMap[Key]>) => {
    type: typeof ACTIONS[Key];
    payload: ReturnType<ActionsMap[Key]>['payload'];
  }
};

export type Actions = {
  [Key in keyof ActionsMap]: {
    type: typeof ACTIONS[Key];
    payload: ReturnType<ActionsMap[Key]>['payload'];
  }
}[keyof ActionsMap];

export interface IEventsStoreContextProps {
  events: IEvent[];
  addEvent: (newEvent: TPartialEvent) => Promise<void>;
  deleteEvent: (eventId: string) => Promise<void>;
  updateEvent: (newEvent: TPartialEvent) => Promise<void>;
  fetchEvents: () => Promise<void>;
}