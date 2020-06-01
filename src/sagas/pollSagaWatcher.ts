import { call, take, race } from "redux-saga/effects";
import { pollSagaWorker } from "./pollSagaWorker";
import {
  setPollingStarted,
  setPollingStopped,
  PollingStartedPayloadType,
} from "../state/polling.slice";

export type WatchedPollingActionType = {
  type: typeof setPollingStarted.type;
  payload: PollingStartedPayloadType;
};

export function* pollSagaWatcher() {
  while (true) {
    const action: WatchedPollingActionType = yield take(setPollingStarted.type);
    yield race([
      call(() => pollSagaWorker(action)),
      take(setPollingStopped.type),
    ]);
  }
}
