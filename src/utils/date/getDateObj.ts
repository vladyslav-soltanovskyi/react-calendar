export const getDateObj = (date: Date | string) => {
  date = new Date(date);
  
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    dayOfWeek: date.getDay()
  }
}