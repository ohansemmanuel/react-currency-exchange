import currentConversionRateReducer, {
  updateConversionRate,
} from "../currentConversionRate.slice";

describe("currentConversionRateReducer", () => {
  test("it should handle updateConversionRate", () => {
    const initialState = { rate: 10 };
    const expectedNewRate = 1.343;

    const newState = currentConversionRateReducer(initialState, {
      type: updateConversionRate.type,
      payload: expectedNewRate,
    });

    expect(newState.rate).toEqual(expectedNewRate);
  });
});
