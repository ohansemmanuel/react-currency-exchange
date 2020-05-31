import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { sagaMiddleware, pollSagaWatcher } from "../sagas";
import activeCurrenciesReducer from "./activeCurrencies.slice";
import currenciesReducer from "./currencies.slice";
import currentConversionRateReducer from "./currentConversionRate.slice";
import pollingReducer from "./polling.slice";

export const store = configureStore({
  reducer: {
    activeCurrencies: activeCurrenciesReducer,
    currencies: currenciesReducer,
    currentConversionRate: currentConversionRateReducer,
    polling: pollingReducer,
  },
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
});

//@ts-ignore
sagaMiddleware.run(pollSagaWatcher);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
