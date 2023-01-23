import { getDifferenceInTimeFromTwoTimes } from "./index";

export const formatDifferenceOfTwoTimes = (timeStart: string, timeEnd: string, locale: string = 'default') => {
  const { minutes, hours } = getDifferenceInTimeFromTwoTimes(timeStart, timeEnd);
  const formatter = new Intl.RelativeTimeFormat(locale, { style: 'narrow' });

  if (minutes < 60) {
    return formatter.format(minutes, 'minutes');
  }
  return formatter.format(hours, 'hours');
}