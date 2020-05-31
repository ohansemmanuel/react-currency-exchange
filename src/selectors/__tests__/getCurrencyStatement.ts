import { getCurrencyStatement } from "../";
import { mockState } from "../state.mock";

describe("getCurrencyStatement", () => {
  test("it works as expected", () => {
    expect(getCurrencyStatement(mockState, "usd")).toEqual(
      mockState.currencies.usd
    );
  });
});
