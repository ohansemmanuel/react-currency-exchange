import { createSlice } from "@reduxjs/toolkit";

const currentConversionRateSlice = createSlice({
  name: "currentConversionRate",
  initialState: { rate: 1.123 },
  reducers: {
    updateConversionRate(state, { payload }: { payload: number }) {
      state.rate = payload;
    },
  },
});

export const { updateConversionRate } = currentConversionRateSlice.actions;

export default currentConversionRateSlice.reducer;
