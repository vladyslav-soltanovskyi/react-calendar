import { createDate } from './createDate';

export const formatDate = (date: Date, format: string, locale: string = 'default'): string => {
  const d = createDate({ date, locale });

  return format
    .replace(/\bYYYY\b/, d.year.toString())
    .replace(/\bYYY\b/, d.yearShort)
    .replace(/\bDDDD\b/, d.day)
    .replace(/\bDDD\b/, d.dayShort)
    .replace(/\bDD\b/, d.dayNumber.toString().padStart(2, '0'))
    .replace(/\bD\b/, d.dayNumber.toString())
    .replace(/\bMMMM\b/, d.month)
    .replace(/\bMMM\b/, d.monthShort)
    .replace(/\bMM\b/, d.monthNumber.toString().padStart(2, '0'))
    .replace(/\bM\b/, d.monthNumber.toString())
    .replace(/\bhh\b/, d.hours.toString().padStart(2, '0'))
    .replace(/\bh\b/, d.hours.toString())
    .replace(/\bmm\b/, d.minutes.toString().padStart(2, '0'))
    .replace(/\bm\b/, d.minutes.toString())
    .replace(/\bss\b/, d.seconds.toString().padStart(2, '0'))
    .replace(/\bs\b/, d.seconds.toString());
};
