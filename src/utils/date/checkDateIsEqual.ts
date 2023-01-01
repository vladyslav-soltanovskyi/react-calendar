import { getDateObj } from "./getDateObj";

export const checkDateIsEqual = (date1: Date | string, date2: Date | string) => {
  const dateObj1 = getDateObj(date1);
  const dateObj2 = getDateObj(date2);

  const isCurrentYear = dateObj1.year === dateObj2.year;
  const isCurrentMonth = dateObj1.month === dateObj2.month;
  const isCurrentDay = dateObj1.day === dateObj2.day;

  return isCurrentYear && isCurrentMonth && isCurrentDay;
}