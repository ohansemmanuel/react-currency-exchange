import activeCurrenciesReducer, {
  reverseActiveCurrencies,
  setActiveCurrency,
} from "../activeCurrencies.slice";
import { AcceptedCurrency } from "../currencies.slice";

describe("activeCurrenciesReducer", () => {
  test("it should handle reverseActiveCurrencies", () => {
    const initialState: AcceptedCurrency[] = ["usd", "eur"];
    const expectedReversedState = ["eur", "usd"];

    const newState = activeCurrenciesReducer(initialState, {
      type: reverseActiveCurrencies.type,
    });
    expect(newState).toEqual(expectedReversedState);
  });

  test("it should handle setActiveCurrency", () => {
    const initialState: AcceptedCurrency[] = ["usd", "eur"];
    const expectedState = ["usd", "sed"];
    const newState = activeCurrenciesReducer(initialState, {
      type: setActiveCurrency.type,
      payload: {
        currency: "sed",
        position: 1,
      },
    });
    expect(newState).toEqual(expectedState);
  });
});
