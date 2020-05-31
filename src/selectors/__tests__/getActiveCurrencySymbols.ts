import { getActiveCurrencySymbols } from "../";
import { mockState } from "../state.mock";

describe("getActiveCurrencySymbols", () => {
  test("it works as expected", () => {
    expect(getActiveCurrencySymbols(mockState)).toEqual(["$", "€"]);
  });
});
