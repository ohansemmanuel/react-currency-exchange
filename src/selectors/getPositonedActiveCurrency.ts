import { createSelector } from "reselect";
import { getActiveCurrencies } from "./getActiveCurrencies";

export const getPositonedActiveCurrency = createSelector(
  getActiveCurrencies,
  (_: any, position: 0 | 1) => position,
  (currencies, position) => currencies[position]
);
