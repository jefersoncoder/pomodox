export const secondToMinute = (second: number) => {
  return Math.floor(second / 60);
};

export const formatSecond = (second: number) => {
  return second % 60;
};
