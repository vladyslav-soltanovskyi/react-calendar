export const formatMins = (mins: number) => {
  return mins < 10 ? `0${mins}` : mins;
};
