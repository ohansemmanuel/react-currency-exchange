import { getActiveCurrencies } from "../";

describe("getActiveCurrencies", () => {
  test("it works as expected", () => {
    const state = {
      activeCurrencies: ["usd", "eur"],
      currentConversionRate: { rate: 1.22 },
      currencies: {
        eur: {
          balance: 3546,
          symbol: "€",
        },
        usd: {
          balance: 12,
          symbol: "$",
        },
        gpb: {
          balance: 0,
          symbol: "£",
        },
      },
    };

    expect(getActiveCurrencies(state)).toEqual(state.activeCurrencies);
  });
});
