import activeCurrencies, {
  reverseActiveCurrencies,
  setActiveCurrency,
} from "../activeCurrencies.slice";
import { AcceptedCurrency } from "../currencies.slice";

describe("activeCurrencies", () => {
  test("it should handle reverseActiveCurrencies", () => {
    const initialState: AcceptedCurrency[] = ["usd", "eur"];
    const expectedReversedState = ["eur", "usd"];

    const newState = activeCurrencies(initialState, {
      type: reverseActiveCurrencies.type,
    });
    expect(newState).toEqual(expectedReversedState);
  });

  test("it should handle setActiveCurrency", () => {
    const initialState: AcceptedCurrency[] = ["usd", "eur"];
    const expectedState = ["usd", "sed"];
    const newState = activeCurrencies(initialState, {
      type: setActiveCurrency.type,
      payload: {
        currency: "sed",
        position: 1,
      },
    });
    expect(newState).toEqual(expectedState);
  });
});
