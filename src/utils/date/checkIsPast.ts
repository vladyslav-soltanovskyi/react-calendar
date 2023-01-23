import { checkIsToday } from './checkIsToday';

export const checkIsPast = (date: Date) => {
  const today = new Date();

  return (today.getTime() > date.getTime()) && !checkIsToday(date);
};