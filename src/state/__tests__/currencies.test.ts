import currenciesReducer, { updateBalance } from "../currencies.slice";

describe("currenciesReducer", () => {
  test("it should handle updateBalance", () => {
    const initialState = {
      eur: {
        balance: 3546,
        symbol: "€",
      },
      usd: {
        balance: 12,
        symbol: "$",
      },
      gbp: {
        balance: 0,
        symbol: "£",
      },
    };
    const expectedNewBalance = 1000;

    const newState = currenciesReducer(initialState, {
      type: updateBalance.type,
      payload: { currency: "usd", balance: expectedNewBalance },
    });

    expect(newState.usd.balance).toEqual(expectedNewBalance);
  });
});
