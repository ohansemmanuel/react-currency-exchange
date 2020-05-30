import { createSelector } from "reselect";
import { AcceptedCurrency } from "../state/currencies.slice";
import { RootState } from "../state";

export const getCurrencyStatement = createSelector(
  (state: RootState) => state,
  (_: any, currency: AcceptedCurrency) => currency,
  (state, currency) => state.currencies[currency]
);
