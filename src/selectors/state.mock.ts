import { AcceptedCurrency } from "../state/currencies.slice";

export const mockState = {
  activeCurrencies: ["usd", "eur"] as AcceptedCurrency[],
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
    gbp: {
      balance: 0,
      symbol: "£",
    },
  },
  polling: {
    progress: 1,
  },
  exchangeInputValues: [
    { inputStringValue: "11.0", inputValue: 11 },
    { inputStringValue: "34.55", inputValue: 34.55 },
  ],
  lastTouchedInputPosition: { position: 0 },
};
