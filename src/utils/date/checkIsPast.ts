import { checkIsToday } from './checkIsToday';

export const checkIsPast = (date: Date) => {
  const today = new Date();
  const chosenDate = new Date(date);

  return (today.getTime() > chosenDate.getTime()) && !checkIsToday(chosenDate);
};