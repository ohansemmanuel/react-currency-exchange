import { createSlice } from "@reduxjs/toolkit";

const exchangeInputValues = createSlice({
  name: "exchangeInputValues",
  initialState: [0, 0],
  reducers: {
    reverseExchangeInputValues(state) {
      state.reverse();
    },
    setExchangeInputValues(
      state,
      { payload }: { payload: { value: number; position: 0 | 1 } }
    ) {
      const { position, value } = payload;
      state[position] = value;
    },
  },
});

export const {
  reverseExchangeInputValues,
  setExchangeInputValues,
} = exchangeInputValues.actions;

export default exchangeInputValues.reducer;
