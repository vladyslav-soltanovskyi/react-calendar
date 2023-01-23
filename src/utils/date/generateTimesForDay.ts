export const generateTimesForDay = (timeStart: string, isFullDay: boolean = false) => {
  const [hours, mins] = timeStart.split(':');
  const divide = 15;
  const hoursInDay = 24;
  const minsInHour = 60;
  const twoOptions = 2;
  const fourOptions = 4;
  const countTimes = isFullDay
    ? hoursInDay * minsInHour / divide
    : (hoursInDay - 1) * twoOptions + fourOptions;
  
  const result: [string, string][] = [];

  for (let i = 0; i < countTimes; i++) {
    if (!result[i - 1]) {
      result.push([hours, mins]);
      continue;
    }
    const [prevHours, prevMins] = result[i-1];
    const nextMins = (i <= fourOptions) || isFullDay
        ? +prevMins + divide
        : +prevMins + 2 * divide;
    const nextHours = nextMins >= minsInHour
        ? +prevHours + 1
        : +prevHours;
    
    result.push([
        `${nextHours % hoursInDay}`.padStart(2, '0'),
        `${nextMins % minsInHour}`.padStart(2, '0')
    ]);
  }
  return result;
}