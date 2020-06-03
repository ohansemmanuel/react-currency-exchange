import { getBalanceExceeded } from "..";
import { mockState } from "../state.mock";

describe("getBalanceExceeded", () => {
  test("handles lesser numbers", () => {
    expect(
      getBalanceExceeded({
        ...mockState,
        exchangeInputValues: [
          { inputStringValue: "10.0", inputValue: 10 },
          { inputStringValue: "34.55", inputValue: 34.55 },
        ],
      })
    ).toBeFalsy();
  });
  test("handles larger numbers", () => {
    expect(
      getBalanceExceeded({
        ...mockState,
        exchangeInputValues: [
          { inputStringValue: "100.0", inputValue: 100 },
          { inputStringValue: "34.55", inputValue: 34.55 },
        ],
      })
    ).toBeTruthy();
  });
});
