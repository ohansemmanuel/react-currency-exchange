import { createSlice } from "@reduxjs/toolkit";
import { Base as CurrencyPayloadType } from "../api/fetchOpenExchangeRates";

export enum PollingState {
  IDLE,
  STARTED,
  STOPPED,
  FAILED,
}

export type PollingStartedPayloadType = {
  base: CurrencyPayloadType;
  to: CurrencyPayloadType;
};

const initialState: { progress: PollingState } = {
  progress: PollingState.IDLE,
};
const pollingSlice = createSlice({
  name: "polling",
  initialState,
  reducers: {
    setPollingStarted(state, _: { payload: PollingStartedPayloadType }) {
      state.progress = PollingState.STARTED;
    },
    setPollingStopped(state) {
      state.progress = PollingState.STOPPED;
    },
    setPollingIdle(state) {
      state.progress = PollingState.IDLE;
    },
    setPollingFailed(state) {
      state.progress = PollingState.FAILED;
    },
  },
});

export const {
  setPollingStarted,
  setPollingStopped,
  setPollingIdle,
  setPollingFailed,
} = pollingSlice.actions;
export default pollingSlice.reducer;
