import { createSlice } from "@reduxjs/toolkit";

const exchangeInputValues = createSlice({
  name: "exchangeInputValues",
  initialState: [
    {
      inputStringValue: "0",
      inputValue: 0,
    },
    {
      inputStringValue: "0",
      inputValue: 0,
    },
  ],
  reducers: {
    reverseExchangeInputValues(state) {
      state.reverse();
    },
    setExchangeInputValues(
      state,
      {
        payload,
      }: { payload: { value: number; stringValue: string; position: 0 | 1 } }
    ) {
      const { position, value, stringValue } = payload;
      state[position].inputValue = value;
      state[position].inputStringValue = stringValue;
    },
  },
});

export const {
  reverseExchangeInputValues,
  setExchangeInputValues,
} = exchangeInputValues.actions;

export default exchangeInputValues.reducer;
