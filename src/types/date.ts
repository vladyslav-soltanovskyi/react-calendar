import { createDate, createMonth, createWeek, getDay } from "utils/date";

export type TDate = ReturnType<typeof createDate>;
export type TWeek = ReturnType<typeof createWeek>;
export type TMonth = ReturnType<typeof createMonth>;

export interface IWeekDay {
  day: TDate['day'];
  dayShort: TDate['dayShort'];
}

export interface IMonth {
  month: TDate['month'];
  monthShort: TDate['monthShort'];
  monthIndex: TDate['monthIndex'];
  date: TDate['date'];
}

export type IMonthDay = ReturnType<typeof getDay>;

export type IModes = "week" | "month" | "monthes" | "year" | "years";

export type IDirections = "left" | "right" | "today";