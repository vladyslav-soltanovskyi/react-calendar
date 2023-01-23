import { IRules } from "hooks/useValidator/types";

export const createEventSchema: IRules = {
  title: {
    isRequired: true
  },
  startDate: {
    isRequired: true,
  },
  endDate: {
    isRequired: true,
    isDateInFeature: 'startDate'
  },
  startTime: {
    maxLength: 5,
    isNumberWithColon: true
  },
  endTime: {
    maxLength: 5,
    isNumberWithColon: true
  }
}