export const getNextStartMinutes = (mins: number) => {
  const divide = 15;
  const remainder = mins % divide;
  const isAdd30 = Math.round(remainder / divide);
  const startMins = isAdd30 === 1
    ? (divide * 2) - remainder
    : divide - remainder;
  
  return startMins;
}