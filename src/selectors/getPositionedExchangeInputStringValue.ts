import { createSelector } from "reselect";
import { getExchangeInputStringValues } from "./getExchangeInputStringValues";

export const getPositionedExchangeInputStringValue = createSelector(
  getExchangeInputStringValues,
  (_: any, position: 0 | 1) => position,
  (exchangeInputValues, position) => exchangeInputValues[position]
);
