import { getLastTouchedInputPosition } from "..";
import { mockState } from "../state.mock";

describe("getActiveCurrencies", () => {
  test("it works as expected", () => {
    expect(getLastTouchedInputPosition(mockState)).toEqual(
      mockState.lastTouchedInputPosition.position
    );
  });
});
