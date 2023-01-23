export const getDifferenceOfTwoDates = (startDate: Date, endDate: Date) => {
  const milliseconds = endDate.getTime() - startDate.getTime();
  const seconds = milliseconds / 1000;
  const minutes = Math.ceil(seconds / 60);
  const hours = minutes / 60;
  const days = hours / 24;
  
  return {
    milliseconds,
    seconds,
    minutes,
    hours,
    days
  }
}