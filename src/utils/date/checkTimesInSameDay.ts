export const checkTimesInSameDay = (timeStart: string, timeEnd: string) => {
  const [startHours, startMins] = timeStart.split(':');
  const [endHours, endMins] = timeEnd.split(':');
  
  if (+startHours > +endHours) {
    return false;
  }
  if (+startHours === +endHours && +startMins > +endMins) {
    return false;
  }

  return true;
}