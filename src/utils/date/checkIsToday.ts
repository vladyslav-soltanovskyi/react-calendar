import { checkDateIsEqual } from './checkDateIsEqual';

export const checkIsToday = (date: Date) => {
  const today = new Date();

  return checkDateIsEqual(today, date);
};