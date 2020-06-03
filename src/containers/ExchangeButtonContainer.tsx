import React from "react";
import { Button } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  getBalanceExceeded,
  getPositionedExchangeInputValue,
  getCurrentExchangeRate,
  getExchangeLessThanMinimum,
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
  const currentExchangeRate = useSelector(getCurrentExchangeRate);
  const exchangeValueLessThanMinimum = useSelector(getExchangeLessThanMinimum);

  const handleExchange = () => {
    dispatch(exchangeAction());
    dispatch(
      setExchangeInputValues({ value: 0, stringValue: "0", position: 0 })
    );
    dispatch(
      setExchangeInputValues({ value: 0, stringValue: "0", position: 1 })
    );
  };

  const disabled =
    balanceExceeded ||
    exchangeValueLessThanMinimum ||
    !firstExchangeValue ||
    !currentExchangeRate;

  return (
    <Button cta onClick={handleExchange} disabled={disabled}>
      Exchange
    </Button>
  );
};
