import { getActiveCurrencies } from "..";
import { mockState } from "../state.mock";

describe("getActiveCurrencies", () => {
  test("it works as expected", () => {
    expect(getActiveCurrencies(mockState)).toEqual(mockState.activeCurrencies);
  });
});
