import { createSelector } from "reselect";
import { getPositonedActiveCurrency } from "./getPositonedActiveCurrency";
import { RootState } from "../state";
import { getCurrencyStatement } from "./getCurrencyStatement";
import { getPositionedExchangeInputValue } from "./getPositionedExchangeInputValue";

export const getBalanceExceeded = createSelector(
  (state: RootState) => state,
  (state) => getPositionedExchangeInputValue(state, 0),
  (state) => getPositonedActiveCurrency(state, 0),
  (state, inputValue, currency) =>
    inputValue > getCurrencyStatement(state, currency).balance
);
