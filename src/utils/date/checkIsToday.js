import { checkDateIsEqual } from './checkDateIsEqual';

export const checkIsToday = (date) => {
  const today = new Date();

  return checkDateIsEqual(today, date);
};