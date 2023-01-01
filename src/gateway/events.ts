import { IEvent, TPartialEvent } from "types/event";
import { request } from "./api";

const getEvents = () => request.get<IEvent[]>('');

const createEvent = (eventData: TPartialEvent) => request.post<IEvent>('', eventData);

const deleteEvent = (eventId: string) => request.delete(`/${eventId}`);

const updateEvent = (eventId: string, eventData: TPartialEvent) => request.put<IEvent>(`/${eventId}`, eventData);

export default {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent
}