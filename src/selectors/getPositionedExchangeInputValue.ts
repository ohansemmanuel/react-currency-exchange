import { createSelector } from "reselect";
import { getExchangeInputValues } from "./getExchangeInputValues";

export const getPositionedExchangeInputValue = createSelector(
  getExchangeInputValues,
  (_: any, position: 0 | 1) => position,
  (exchangeInputValues, position) => exchangeInputValues[position]
);
