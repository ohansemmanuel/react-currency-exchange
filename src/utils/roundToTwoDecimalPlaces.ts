export const roundToTwoDecimalPlaces = (val: number) =>
  Math.round((val + Number.EPSILON) * 100) / 100;
