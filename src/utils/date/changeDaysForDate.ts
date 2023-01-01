export const changeDaysForDate = (date: Date, days: number) => {
  const result = new Date(date);
  return new Date(
    result.setDate(result.getDate() + days)
  );
}
