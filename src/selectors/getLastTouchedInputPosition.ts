import { createSelector } from "reselect";
import { RootState } from "../state";

export const getLastTouchedInputPosition = createSelector(
  (state: RootState) => state,
  (state) => state.lastTouchedInputPosition.position
);
