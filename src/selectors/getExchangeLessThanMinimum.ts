import { createSelector } from "reselect";
import { RootState } from "../state";
import { getPositionedExchangeInputValue } from "./getPositionedExchangeInputValue";

const MINIMUM_AMOUNT = 0.1;
export const getExchangeLessThanMinimum = createSelector(
  (state: RootState) => state,
  (state) => getPositionedExchangeInputValue(state, 0),
  (_, inputValue) => inputValue > 0 && inputValue < MINIMUM_AMOUNT
);
