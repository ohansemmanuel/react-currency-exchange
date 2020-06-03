import { take } from "redux-saga/effects";

import { pollSagaWatcher } from "../pollSagaWatcher";
import { setPollingStarted } from "../../state/polling.slice";

describe("pollSagaWatcher", () => {
  test("should wait for a polling action type", () => {
    const sagaGenerator = pollSagaWatcher();
    expect(sagaGenerator.next().value).toEqual(take(setPollingStarted.type));
  });
});
