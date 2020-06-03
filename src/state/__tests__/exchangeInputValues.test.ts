import exchangeInputValuesReducer, {
  reverseExchangeInputValues,
  setExchangeInputValues,
} from "../exchangeInputValues.slice";

describe("exchangeInputValuesReducer", () => {
  test("it should handle reverseActiveCurrencies", () => {
    const initialState = [
      { inputStringValue: "10.23", inputValue: 10.23 },
      { inputStringValue: "23.1", inputValue: 23.1 },
    ];
    const expectedReversedState = [
      { inputStringValue: "23.1", inputValue: 23.1 },
      { inputStringValue: "10.23", inputValue: 10.23 },
    ];

    const newState = exchangeInputValuesReducer(initialState, {
      type: reverseExchangeInputValues.type,
    });
    expect(newState).toEqual(expectedReversedState);
  });

  test("it should handle setActiveCurrency", () => {
    const initialState = [
      { inputStringValue: "10.23", inputValue: 10.23 },
      { inputStringValue: "23.1", inputValue: 23.1 },
    ];
    const expectedState = [
      { inputStringValue: "10.23", inputValue: 10.23 },
      { inputStringValue: "11.0", inputValue: 11 },
    ];

    const newState = exchangeInputValuesReducer(initialState, {
      type: setExchangeInputValues.type,
      payload: {
        value: 11,
        stringValue: "11.0",
        position: 1,
      },
    });
    expect(newState).toEqual(expectedState);
  });
});
