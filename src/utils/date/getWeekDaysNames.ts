import { createDate } from './createDate';
import { IWeekDay } from 'types/date';

export const getWeekDaysNames = (firstWeekDay: number = 2, locale: string = 'default') => {
  const date = new Date();
  const weekDaysNames: IWeekDay[] = Array.from({ length: 7 });

  weekDaysNames.forEach((_, i) => {
    const { day, dayNumberInWeek, dayShort } = createDate({
      locale,
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
    });
  
    weekDaysNames[dayNumberInWeek - 1] = { day, dayShort };
  });

  return [...weekDaysNames.slice(firstWeekDay - 1), ...weekDaysNames.slice(0, firstWeekDay - 1)];
};
