export const changeDaysForDate = (date, days) => {
  const result = new Date(date);
  return new Date(
    result.setDate(result.getDate() + days)
  );
}
