import { createDate } from "./createDate";
import { getWeekStartDate } from "./getWeekStartDate";

export const getDisplayedMonth = (date: Date, locale: string = 'default') => {
  const weekStart = createDate({ date: getWeekStartDate(date), locale });
  const weekEnd = createDate({ date: new Date(weekStart.year, weekStart.monthIndex, weekStart.dayNumber + 6), locale });

  const isSameMonth = weekStart.monthIndex === weekEnd.monthIndex;
  if (isSameMonth) {
    return `${weekStart.month} ${weekStart.year}`;
  }
  const isSameYear = weekStart.year === weekEnd.year;
  return isSameYear
    ? `${weekStart.monthShort} - ${weekEnd.monthShort} ${weekStart.year}`
    : `${weekStart.monthShort} ${weekStart.year} - ${weekEnd.monthShort} ${weekEnd.year}`;
};