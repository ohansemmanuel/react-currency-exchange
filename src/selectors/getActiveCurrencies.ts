import { createSelector } from "reselect";
import { RootState } from "../state";

export const getActiveCurrencies = createSelector(
  (state: RootState) => state,
  (state) => state.activeCurrencies
);
