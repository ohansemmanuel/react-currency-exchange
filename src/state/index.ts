import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { sagaMiddleware, pollSagaWatcher } from "../sagas";
import activeCurrenciesReducer from "./activeCurrencies.slice";
import currenciesReducer from "./currencies.slice";
import currentConversionRateReducer from "./currentConversionRate.slice";
import pollingReducer from "./polling.slice";
import exchangeInputValuesReducer from "./exchangeInputValues.slice";
import lastTouchedInputPositionReducer from "./lastTouchedInputPosition.slice";
import { exchangeMiddleware } from "../middleware";

export const store = configureStore({
  reducer: {
    activeCurrencies: activeCurrenciesReducer,
    currencies: currenciesReducer,
    currentConversionRate: currentConversionRateReducer,
    polling: pollingReducer,
    exchangeInputValues: exchangeInputValuesReducer,
    lastTouchedInputPosition: lastTouchedInputPositionReducer,
  },
  middleware: [sagaMiddleware, exchangeMiddleware, ...getDefaultMiddleware()],
});

//@ts-ignore
sagaMiddleware.run(pollSagaWatcher);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
