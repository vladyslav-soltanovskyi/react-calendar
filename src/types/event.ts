export interface IEvent {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  type: TEventTypes;
  color: string;
}

export type TPartialEvent = Partial<IEvent>;

export interface IEventCreate {
  title: string;
  description: string;
  start: string;
  end: string;
  type: TEventTypes;
  color: string;
}

export type TEventTypes = 'event' | 'long-event';