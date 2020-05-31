import { createSelector } from "reselect";
import { RootState } from "../state";

export const getCurrentExchangeRate = createSelector(
  (state: RootState) => state,
  (state) => state.currentConversionRate.rate
);
