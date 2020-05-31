import { createSlice } from "@reduxjs/toolkit";

export const currencyList = ["eur", "usd", "gbp"] as const;
export type AcceptedCurrency = typeof currencyList[number];

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: {
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
  reducers: {
    updateBalance(
      state,
      { payload }: { payload: { currency: AcceptedCurrency; balance: number } }
    ) {
      const { currency, balance } = payload;
      state[currency].balance = balance;
    },
  },
});

export const { updateBalance } = currenciesSlice.actions;

export default currenciesSlice.reducer;
