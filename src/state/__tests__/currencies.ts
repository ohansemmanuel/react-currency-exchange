import currencies, { updateBalance } from "../currencies.slice";

describe("activeCurrencies", () => {
  test("it should handle updateBalance", () => {
    const initialState = {
      eur: {
        balance: 3546,
      },
      usd: {
        balance: 12,
      },
      gpb: {
        balance: 0,
      },
    };
    const expectedNewBalance = 1000;

    const newState = currencies(initialState, {
      type: updateBalance.type,
      payload: { currency: "usd", balance: expectedNewBalance },
    });

    expect(newState.usd.balance).toEqual(expectedNewBalance);
  });
});
