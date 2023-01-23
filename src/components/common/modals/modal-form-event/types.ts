import { IValidatorData } from "hooks/useValidator/types";
import { TEventTypes } from "types/event";

export interface IModalValues extends IValidatorData {
  title: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  description: string;
  isLongEvent: boolean;
  color: string;
}

export interface IMapEventValues {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  type?: TEventTypes;
  color?: string;
}