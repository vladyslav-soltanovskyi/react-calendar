export interface IEvent {
  id: string;
  title: string;
  description: string;
  start: string | Date;
  end: string | Date;
}

export type TPartialEvent = Partial<IEvent>