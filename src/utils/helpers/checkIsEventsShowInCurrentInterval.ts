export const checkIsEventsShowInCurrentInterval = (
  startDateInInterval: Date,
  endDateInInterval: Date,
  eventStartDate: Date,
  eventEndDate: Date
) => {
  const isEventFromCurrentInterval = startDateInInterval.getTime() <= eventStartDate.getTime() &&
      endDateInInterval.getTime() >= eventEndDate.getTime();

  const isEventFromNextInterval = endDateInInterval.getTime() >= eventStartDate.getTime() &&
    endDateInInterval.getTime() <= eventEndDate.getTime();

  const isEventFromPrevInterval = startDateInInterval.getTime() <= eventEndDate.getTime() &&
    startDateInInterval.getTime() >= eventStartDate.getTime();
    
  return isEventFromCurrentInterval || isEventFromNextInterval || isEventFromPrevInterval;
}