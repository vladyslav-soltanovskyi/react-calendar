import { getWeekStartDate } from "./getWeekStartDate";
import { months } from "./months";

export const getDisplayedMonth = (date) => {
  const currentDate = new Date(date);
  const weekStart = getWeekStartDate(date);
  const weekEnd = new Date(
    new Date(currentDate).setDate(currentDate.getDate() + 6)
  );
  const startMonth = weekStart.getMonth();
  const startYear = weekStart.getFullYear();
  const endMonth = weekEnd.getMonth();
  const endYear = weekEnd.getFullYear();
  const isSameMonth = startMonth === endMonth;
  if (isSameMonth) {
    return `${months[startMonth]} ${startYear}`;
  }
  const isSameYear = startYear === endYear;
  return isSameYear
    ? `${months[startMonth]} - ${months[endMonth]} ${startYear}`
    : `${months[startMonth]} ${startYear} - ${months[endMonth]} ${endYear}`;
};

