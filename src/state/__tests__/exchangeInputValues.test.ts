import exchangeInputValuesReducer, {
  reverseExchangeInputValues,
  setExchangeInputValues,
} from "../exchangeInputValues.slice";

describe("exchangeInputValuesReducer", () => {
  test("it should handle reverseActiveCurrencies", () => {
    const initialState = [10.23, 23.1];
    const expectedReversedState = [23.1, 10.23];

    const newState = exchangeInputValuesReducer(initialState, {
      type: reverseExchangeInputValues.type,
    });
    expect(newState).toEqual(expectedReversedState);
  });

  test("it should handle setActiveCurrency", () => {
    const initialState = [10.23, 23.1];
    const expectedState = [10.23, 11];

    const newState = exchangeInputValuesReducer(initialState, {
      type: setExchangeInputValues.type,
      payload: {
        value: 11,
        position: 1,
      },
    });
    expect(newState).toEqual(expectedState);
  });
});
