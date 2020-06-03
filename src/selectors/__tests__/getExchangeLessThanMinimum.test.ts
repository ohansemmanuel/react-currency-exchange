import { getExchangeLessThanMinimum } from "..";
import { mockState } from "../state.mock";

describe("getExchangeLessThanMinimum", () => {
  test("it works as expected", () => {
    expect(getExchangeLessThanMinimum(mockState)).toBeFalsy();
  });
});
