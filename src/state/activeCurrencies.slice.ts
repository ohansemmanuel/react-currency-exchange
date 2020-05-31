import { createSlice } from "@reduxjs/toolkit";
import { AcceptedCurrency } from "./currencies.slice";

const initialState: Array<AcceptedCurrency> = ["usd", "eur"];
const activeCurrenciesSlice = createSlice({
  name: "activeCurrencies",
  initialState,
  reducers: {
    reverseActiveCurrencies(state) {
      state.reverse();
    },
    setActiveCurrency(
      state,
      { payload }: { payload: { currency: AcceptedCurrency; position: 0 | 1 } }
    ) {
      const { position, currency } = payload;
      state[position] = currency;
    },
  },
});

export const {
  reverseActiveCurrencies,
  setActiveCurrency,
} = activeCurrenciesSlice.actions;

export default activeCurrenciesSlice.reducer;
