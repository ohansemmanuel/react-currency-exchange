import { roundToTwoDecimalPlaces } from "../roundToTwoDecimalPlaces";

describe("roundToTwoDecimalPlaces", () => {
  test("it works as expected", () => {
    expect(roundToTwoDecimalPlaces(1.4555)).toBe(1.46);
    expect(roundToTwoDecimalPlaces(1.005)).toBe(1.01);
    expect(roundToTwoDecimalPlaces(8.995239999999999)).toBe(9);
  });
});
