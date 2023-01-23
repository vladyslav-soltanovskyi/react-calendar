import { IMonth } from 'types/date';
import { createDate } from './createDate';

export const getMonthesNames = (d: Date = new Date(), locale: string = 'defalut') => {
  const monthesNames: IMonth[] = Array.from({ length: 12 });

  monthesNames.forEach((_, i) => {
    const { month, monthIndex, monthShort, date } = createDate({
      locale,
      date: new Date(d.getFullYear(), d.getMonth() + i, 1)
    });

    monthesNames[monthIndex] = { month, monthIndex, monthShort, date };
  });

  return monthesNames;
};
