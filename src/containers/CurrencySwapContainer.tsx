import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../components";
import { reverseActiveCurrencies } from "../state/activeCurrencies.slice";
import { AppDispatch } from "../state";
import { reverseExchangeInputValues } from "../state/exchangeInputValues.slice";

export const CurrencySwapContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCurrencySwap = () => {
    dispatch(reverseActiveCurrencies());
    dispatch(reverseExchangeInputValues());
  };

  return (
    <Button
      onClick={handleCurrencySwap}
      style={{ width: "30px", height: "30px", borderRadius: "50%" }}
    >
      ⇅
    </Button>
  );
};
