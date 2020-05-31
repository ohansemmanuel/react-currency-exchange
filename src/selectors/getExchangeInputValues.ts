import { createSelector } from "reselect";
import { RootState } from "../state";

export const getExchangeInputValues = createSelector(
  (state: RootState) => state,
  (state) => state.exchangeInputValues
);
