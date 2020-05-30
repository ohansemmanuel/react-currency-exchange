import activeCurrenciesReducer from "./activeCurrencies.slice";
import currenciesReducer from "./currencies.slice";
import currentConversionRateReducer from "./currentConversionRate.slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    activeCurrencies: activeCurrenciesReducer,
    currencies: currenciesReducer,
    currentConversionRate: currentConversionRateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
