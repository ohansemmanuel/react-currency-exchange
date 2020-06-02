import { getCurrentExchangeRate } from "..";
import { mockState } from "../state.mock";

describe("getCurrentExchangeRate", () => {
  test("it works as expected", () => {
    expect(getCurrentExchangeRate(mockState)).toEqual(
      mockState.currentConversionRate.rate
    );
  });
});
