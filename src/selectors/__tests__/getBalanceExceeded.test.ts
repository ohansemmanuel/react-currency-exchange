import { getBalanceExceeded } from "..";
import { mockState } from "../state.mock";

describe("getBalanceExceeded", () => {
  test("handles lesser numbers", () => {
    expect(
      getBalanceExceeded({
        ...mockState,
        exchangeInputValues: [10, 34.55],
      })
    ).toBeFalsy();
  });
  test("handles larger numbers", () => {
    expect(
      getBalanceExceeded({
        ...mockState,
        exchangeInputValues: [100, 34.55],
      })
    ).toBeTruthy();
  });
});
