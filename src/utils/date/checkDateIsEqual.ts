import { createDate } from "./createDate";

export const checkDateIsEqual = (date1: Date, date2: Date) => {
  const isCurrentYear = date1.getFullYear() === date2.getFullYear();
  const isCurrentMonth = date1.getMonth() === date2.getMonth();
  const isCurrentDay = date1.getDate() === date2.getDate();

  return isCurrentYear && isCurrentMonth && isCurrentDay;
}