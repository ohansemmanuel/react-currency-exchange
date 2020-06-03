import { initMock as initAPIMock } from "../../api/fetchOpenExchangeRates.mocks";
import { runSaga } from "redux-saga";
import { mockState } from "../../selectors/state.mock";
import { pollSagaWorker } from "../pollSagaWorker";
import { updateConversionRate } from "../../state/currentConversionRate.slice";

describe("pollSagaWorker", () => {
  beforeEach(initAPIMock);
  test.skip("it works as expected", () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => mockState);

    const result = runSaga(
      {
        dispatch,
        getState,
      },
      pollSagaWorker as any,
      { payload: { base: "USD", to: "EUR" } }
    ).toPromise();

    expect(result).toBe({});
    expect(dispatch.mock.calls.length).toBe(1);
    // first argument to the first call
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: updateConversionRate.type,
      payload: 0.899524,
    });
  });
});
