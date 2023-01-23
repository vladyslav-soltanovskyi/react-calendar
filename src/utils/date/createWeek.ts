import { createDate } from './createDate';
import { getDay } from './getDay';
import { getDisplayedMonth } from './getDisplayedMonth';
import { getWeekStartDate } from './getWeekStartDate';

interface CreateWeekParams {
  date?: Date;
  locale?: string;
}

export const createWeek = (params?: CreateWeekParams) => {
  const date = params?.date ?? new Date();
  const locale = params?.locale ?? 'default';
  const firstWeekDayDate = getWeekStartDate(date);
  
  const d = createDate({ date: firstWeekDayDate, locale });
  const { year, monthIndex, dayNumber } = d;
  const displayedMonth = getDisplayedMonth(date, locale);

  const createWeekDays = () => {
    const days = Array.from({ length: 7 }).map((_, i) => getDay({ year, monthIndex, dayNumber: dayNumber + i, locale }));
    return days;
  };
  
  return {
    date: d.date,
    firstWeekDayDate,
    dayNumber,
    displayedMonth,
    monthIndex,
    year,
    createWeekDays
  };
};
