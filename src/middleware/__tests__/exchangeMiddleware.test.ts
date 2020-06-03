import { Middleware } from "@reduxjs/toolkit";
import { exchangeMiddleware, exchangeAction } from "../exchangeMiddleware";
import { mockState } from "../../selectors/state.mock";
import { updateBalance } from "../../state/currencies.slice";

describe("exchangeMiddleware", () => {
  let next: jest.Mock, dispatch: jest.Mock, getState, middleware: Middleware;

  beforeEach(() => {
    next = jest.fn();
    dispatch = jest.fn();
    getState = jest.fn(() => mockState);
    middleware = exchangeMiddleware({
      dispatch,
      getState,
    })(next);
  });

  test("it should ignore non-exchangeAction.type actions", () => {
    middleware({ type: "SOME_ACTION" } as any);
    expect(dispatch.mock.calls.length).toBe(0);
    expect(next.mock.calls).toEqual([[{ type: "SOME_ACTION" }]]);
  });

  test("it should dispatch exchangeAction.type actions", () => {
    middleware(exchangeAction(null) as any);
    expect(dispatch.mock.calls.length).toBe(2);

    // first argument to the first call
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: updateBalance.type,
      payload: {
        currency: "usd", // first active currency
        balance: 1, // 12 - 11
      },
    });
    // first argument to the second call
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: updateBalance.type,
      payload: {
        currency: "eur",
        balance: 3580.55, // 3546 + 34.55
      },
    });
  });
});
