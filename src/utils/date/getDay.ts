interface GetDayParams {
  year: number;
  monthIndex: number;
  dayNumber: number;
  locale?: string;
}

export const getDay = ({ year, monthIndex, dayNumber, locale = 'default' }: GetDayParams) => {
  const date = new Date(year, monthIndex, dayNumber);
  const dayMonthIndex = date.getMonth();
  const dayNumberInWeek = date.getDay() + 1;
  const yearNumber = date.getFullYear();
  const monthShort = date.toLocaleDateString(locale, { month: 'short' });
  const yearDayNumber = date.getDate();

  return {
    year: yearNumber,
    monthIndex: dayMonthIndex,
    dayNumber: yearDayNumber,
    dayNumberInWeek,
    date: date,
    monthShort
  };
}