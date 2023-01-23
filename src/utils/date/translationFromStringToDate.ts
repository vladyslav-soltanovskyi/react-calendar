import { getWeekStartDate } from "./getWeekStartDate";

const getDateString = (d: Date, locale: string = 'default', options?: Intl.DateTimeFormatOptions) => {
  return d.toLocaleDateString(locale, options).toLocaleLowerCase();
}

export const translationFromStringToDate = (dateString: string, locale: string = 'default') => {
  const d = new Date(dateString);

  if (d.toString() !== 'Invalid Date') {
    return d;
  }

  const firstDayOfWeek = getWeekStartDate(new Date());

  const weekDays: { [key: string]: string } = {};
  
  for (let weekDay = 0; weekDay < 7; weekDay++) {
    const d = new Date(firstDayOfWeek.getFullYear(), firstDayOfWeek.getMonth(), firstDayOfWeek.getDate() + weekDay);

    const weekDayLocale =  getDateString(d, locale, { weekday: 'long' });
    const weekDayShortLocale = getDateString(d, locale, { weekday: 'short' }).replace(/\./g, '');
    const weekDayEng = getDateString(d, 'en', { weekday: 'short' });

    weekDays[weekDayLocale] = weekDayEng;
    weekDays[weekDayShortLocale] = weekDayEng;
  }
  
  const monthes: { [key: string]: string } = {};

  for (let month = 0; month < 12; month++) {
    const d = new Date(2023, month, 7);
    
    const monthLocale = getDateString(d, locale, { month: 'long' });
    const monthShortLocale = getDateString(d, locale, { month: 'short' }).replace(/\./g, '');
    const monthEng = getDateString(d, 'en', { month: 'short' });
    
    monthes[monthLocale] = monthEng;
    monthes[monthShortLocale] = monthEng;
  }

  const [dayInWeek, month] = dateString.replace(/[0-9.,]+/g, '').replace(/\s+/g, ' ').trim().toLowerCase().split(' ');

  const translatedDayInWeek = weekDays[dayInWeek];
  const translatedMonth = monthes[month];

  let translatedDateString = dateString;

  if (translatedDayInWeek) {
    translatedDateString = translatedDateString.replace(dayInWeek, translatedDayInWeek);
  }
  if (translatedMonth) {
    translatedDateString = translatedDateString.replace(month, translatedMonth);
  }

  const translatedDate = new Date(translatedDateString);

  if (translatedDate.toString() !== 'Invalid Date') {
    return translatedDate;
  }
}