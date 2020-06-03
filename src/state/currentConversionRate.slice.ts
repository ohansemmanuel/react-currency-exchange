import { createSlice } from "@reduxjs/toolkit";

const INITIAL_IDLE_RATE = 1.242;
const currentConversionRateSlice = createSlice({
  name: "currentConversionRate",
  initialState: { rate: INITIAL_IDLE_RATE },
  reducers: {
    updateConversionRate(state, { payload }: { payload: number }) {
      state.rate = payload;
    },
    resetConversionRate(state) {
      state.rate = INITIAL_IDLE_RATE;
    },
  },
});

export const {
  updateConversionRate,
  resetConversionRate,
} = currentConversionRateSlice.actions;

export default currentConversionRateSlice.reducer;
