import { createSlice } from "@reduxjs/toolkit";

export const currencyList = ["eur", "usd", "gpb"] as const;
export type AcceptedCurrency = typeof currencyList[number];

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: {
    eur: {
      balance: 3546,
    },
    usd: {
      balance: 12,
    },
    gpb: {
      balance: 0,
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