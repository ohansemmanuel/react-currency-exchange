import { getCurrencyStatement } from "../";

describe("getCurrencyStatement", () => {
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

    expect(getCurrencyStatement(state, "usd")).toEqual(state.currencies.usd);
  });
});
