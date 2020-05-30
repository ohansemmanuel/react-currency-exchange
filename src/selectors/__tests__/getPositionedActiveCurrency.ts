import { getPositonedActiveCurrency } from "../";

describe("getPositonedActiveCurrency", () => {
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

    expect(
      getPositonedActiveCurrency.resultFunc(state.activeCurrencies, 1)
    ).toEqual(state.activeCurrencies[1]);
  });
});
