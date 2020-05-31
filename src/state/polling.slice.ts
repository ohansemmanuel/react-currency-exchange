import { createSlice } from "@reduxjs/toolkit";
import { Base as CurrencyPayloadType } from "../api/fetchOpenExchangeRates";

export enum PollingState {
  LOADING,
  STARTED,
  STOPPED,
  FAILED,
}

export type PollingStartedPayloadType = {
  base: CurrencyPayloadType;
  to: CurrencyPayloadType;
};

const initialState: { progress: PollingState } = {
  progress: PollingState.LOADING,
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
    setPollingLoading(state) {
      state.progress = PollingState.LOADING;
    },
    setPollingFailed(state) {
      state.progress = PollingState.FAILED;
    },
  },
});

export const {
  setPollingStarted,
  setPollingStopped,
  setPollingLoading,
  setPollingFailed,
} = pollingSlice.actions;
export default pollingSlice.reducer;
