import { createDate } from './createDate';
import { getDay } from './getDay';
import { getMonthNumberOfDays } from './getMonthNumberOfDays';

interface CreateMonthParams {
  date?: Date;
  locale?: string;
}

export const createMonth = (params?: CreateMonthParams) => {
  const date = params?.date ?? new Date();
  const locale = params?.locale ?? 'default';

  const d = createDate({ date, locale });
  const { month: monthName, year, monthNumber, monthIndex } = d;

  const createMonthDays = () => {
    const days = Array.from({ length: getMonthNumberOfDays(monthIndex, year) }).map((_, i) => getDay({ year, monthIndex, dayNumber: i + 1, locale}));
    return days;
  };

  return {
    date: d.date,
    getDay,
    monthName,
    monthIndex,
    monthNumber,
    year,
    createMonthDays
  };
};
