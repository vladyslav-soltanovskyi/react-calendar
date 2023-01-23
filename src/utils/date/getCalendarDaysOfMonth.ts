import { createMonth, generateDaysRange, getMonthNumberOfDays } from "./index";
import { IMonthDay } from "types/date";

const DAYS_IN_WEEK = 7;

interface GetCalendarDaysOfMonthParams {
  year: number;
  monthIndex: number;
  firstWeekDayNumber: number;
  totalDays?: number;
  locale?: string;
}

export const getCalendarDaysOfMonth = (params: GetCalendarDaysOfMonthParams): IMonthDay[] => {
  const { year, monthIndex, firstWeekDayNumber, totalDays } = params;
  const locale = params?.locale ?? 'default';
  const monthNumberOfDays = getMonthNumberOfDays(monthIndex, year);

  const days = createMonth({ date: new Date(year, monthIndex), locale }).createMonthDays();

  const firstDay = days[0];
  const lastDay = days[monthNumberOfDays - 1];
  
  const shiftIndex = firstWeekDayNumber - 1;
  const numberOfPrevDays =
    firstDay.dayNumberInWeek - 1 - shiftIndex < 0
      ? DAYS_IN_WEEK - (firstWeekDayNumber - firstDay.dayNumberInWeek)
      : firstDay.dayNumberInWeek - 1 - shiftIndex;

  const numberOfNextDays =
    DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
      ? DAYS_IN_WEEK - lastDay.dayNumberInWeek - (DAYS_IN_WEEK - shiftIndex)
      : DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex;
  
  const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;
  
  const numberRestDays = typeof totalDays === 'number' ? totalDays - totalCalendarDays : 0;

  const daysFromPrevMonth = generateDaysRange({
    year: firstDay.year,
    monthIndex: firstDay.monthIndex,
    countDays: numberOfPrevDays,
    dayFrom: firstDay.dayNumber - numberOfPrevDays
  });

  const daysFromNextMonth = generateDaysRange({
    year: lastDay.year,
    monthIndex: lastDay.monthIndex,
    countDays: numberOfNextDays + numberRestDays,
    dayFrom: lastDay.dayNumber + 1 
  });

  const calendarDaysOfMonth: IMonthDay[] = [].concat(
    ...daysFromPrevMonth,
    ...days,
    ...daysFromNextMonth
  )
  
  return calendarDaysOfMonth;
}