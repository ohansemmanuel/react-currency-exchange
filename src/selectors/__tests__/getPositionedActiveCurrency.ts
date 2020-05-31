import { getPositonedActiveCurrency } from "../";
import { mockState } from "../state.mock";

describe("getPositonedActiveCurrency", () => {
  test("it works as expected", () => {
    expect(
      getPositonedActiveCurrency.resultFunc(mockState.activeCurrencies, 1)
    ).toEqual(mockState.activeCurrencies[1]);
  });
});
