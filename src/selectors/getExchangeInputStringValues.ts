import { createSelector } from "reselect";
import { RootState } from "../state";

export const getExchangeInputStringValues = createSelector(
  (state: RootState) => state,
  (state) => state.exchangeInputValues.map((v) => v.inputStringValue)
);
