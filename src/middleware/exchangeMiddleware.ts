import { Middleware, createAction } from "@reduxjs/toolkit";
import { RootState } from "../state";
import { updateBalance } from "../state/currencies.slice";

export const exchangeAction = createAction<null>("EXCHANGE");

// ideally, exchage may call the backend to update user's balance.
// Keep this centralised in this custom middleware.

export const exchangeMiddleware: Middleware = ({ getState, dispatch }) => (
  next
) => (action) => {
  if (action.type === exchangeAction.type) {
    const state: RootState = getState();
    const [currencyFrom, currencyTo] = state.activeCurrencies;
    const [currencyFromValue, currencyToValue] = state.exchangeInputValues;

    //deplete currencyFrom
    dispatch({
      type: updateBalance.type,
      payload: {
        currency: currencyFrom,
        balance:
          state.currencies[currencyFrom].balance - currencyFromValue.inputValue,
      },
    });

    //increase currencyTo
    dispatch({
      type: updateBalance.type,
      payload: {
        currency: currencyTo,
        balance:
          state.currencies[currencyTo].balance + currencyToValue.inputValue,
      },
    });
  }

  next(action);
};
