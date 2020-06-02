import pollingReducer, {
  setPollingStarted,
  setPollingStopped,
  setPollingIdle,
  setPollingFailed,
  PollingState,
} from "../polling.slice";

describe("pollingReducer", () => {
  test("it should handle setPollingStarted", () => {
    const initialState = { progress: PollingState.IDLE };
    const expectedState = { progress: PollingState.STARTED };

    const newState = pollingReducer(initialState, {
      type: setPollingStarted.type,
    });
    expect(newState).toEqual(expectedState);
  });

  test("it should handle setPollingStopped", () => {
    const initialState = { progress: PollingState.IDLE };
    const expectedState = { progress: PollingState.STOPPED };

    const newState = pollingReducer(initialState, {
      type: setPollingStopped.type,
    });
    expect(newState).toEqual(expectedState);
  });

  test("it should handle setPollingIdle", () => {
    const initialState = { progress: PollingState.STARTED };
    const expectedState = { progress: PollingState.IDLE };

    const newState = pollingReducer(initialState, {
      type: setPollingIdle.type,
    });
    expect(newState).toEqual(expectedState);
  });

  test("it should handle setPollingFailed", () => {
    const initialState = { progress: PollingState.IDLE };
    const expectedState = { progress: PollingState.FAILED };

    const newState = pollingReducer(initialState, {
      type: setPollingFailed.type,
    });
    expect(newState).toEqual(expectedState);
  });
});
