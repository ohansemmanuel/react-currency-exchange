import React from "react";
import { Button } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  getBalanceExceeded,
  getPositionedExchangeInputValue,
} from "../selectors";
import { RootState, AppDispatch } from "../state";
import { exchangeAction } from "../middleware/exchangeMiddleware";
import { setExchangeInputValues } from "../state/exchangeInputValues.slice";

export const ExchangeButtonContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const balanceExceeded = useSelector(getBalanceExceeded);
  const firstExchangeValue = useSelector((state: RootState) =>
    getPositionedExchangeInputValue(state, 0)
  );

  const handleExchange = () => {
    dispatch(exchangeAction());
    dispatch(setExchangeInputValues({ value: 0, position: 0 }));
    dispatch(setExchangeInputValues({ value: 0, position: 1 }));
  };

  return (
    <Button
      cta
      onClick={handleExchange}
      disabled={balanceExceeded || !firstExchangeValue}
    >
      Exchange
    </Button>
  );
};
