import lastTouchedInputPositionReducer, {
  setLastTouchedInputPosition,
} from "../lastTouchedInputPosition.slice";

describe("lastTouchedInputPositionReducer", () => {
  test("it should handle setLastTouchedInputPosition", () => {
    const initialState = { position: 1 };
    const expectedState = { position: 0 };

    const newState = lastTouchedInputPositionReducer(initialState, {
      type: setLastTouchedInputPosition.type,
      payload: 0,
    });
    expect(newState).toEqual(expectedState);
  });
});
