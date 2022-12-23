import { checkIsToday } from './checkIsToday';

export const checkIsPast = (date) => {
  const today = new Date();
  const chosenDate = new Date(date);

  return (today.getTime() > chosenDate.getTime()) && !checkIsToday(chosenDate);
};