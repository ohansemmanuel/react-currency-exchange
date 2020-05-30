import currentConversionRate, {
  updateConversionRate,
} from "../currentConversionRate.slice";

describe("currentConversionRate", () => {
  test("it should handle updateConversionRate", () => {
    const initialState = { rate: 10 };
    const expectedNewRate = 1.343;

    const newState = currentConversionRate(initialState, {
      type: updateConversionRate.type,
      payload: expectedNewRate,
    });

    expect(newState.rate).toEqual(expectedNewRate);
  });
});
