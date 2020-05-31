import { createSelector } from "reselect";
import { RootState } from "../state";
import { AcceptedCurrency } from "../state/currencies.slice";

export const getActiveCurrencySymbols = createSelector(
  (state: RootState) => state,
  (state) =>
    state.activeCurrencies.map(
      (currency: AcceptedCurrency) => state.currencies[currency].symbol
    )
);
