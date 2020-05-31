import { call, delay, put } from "redux-saga/effects";
import { WatchedPollingActionType } from "./pollSagaWatcher";
import { fetchOpenExchangeRates } from "../api";
import { updateConversionRate } from "../state/currentConversionRate.slice";
import { setPollingFailed } from "../state/polling.slice";
import { fakeLogToServer } from "../utils/fakeLogToServer";

const POLLING_DURATION = 10000; // 10s

export function* pollSagaWorker({ payload }: WatchedPollingActionType) {
  while (true) {
    try {
      const { base, to } = payload;
      const data = yield call(() => fetchOpenExchangeRates(base));
      yield put(updateConversionRate(data.rates[to]));
      yield delay(POLLING_DURATION);
    } catch (err) {
      fakeLogToServer(err);
      yield put(setPollingFailed());
      // wait a bit.
      yield delay(POLLING_DURATION);
    }
  }
}
