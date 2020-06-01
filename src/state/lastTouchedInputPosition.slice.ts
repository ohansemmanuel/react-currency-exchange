import { createSlice } from "@reduxjs/toolkit";

type Position = 0 | 1;

const lastTouchedInputPositionSlice = createSlice({
  name: "lastTouchedInputPosition",
  initialState: { position: 0 },
  reducers: {
    setLastTouchedInputPosition(state, { payload }: { payload: Position }) {
      state.position = payload;
    },
  },
});

export const {
  setLastTouchedInputPosition,
} = lastTouchedInputPositionSlice.actions;

export default lastTouchedInputPositionSlice.reducer;
