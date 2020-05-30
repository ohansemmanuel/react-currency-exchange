import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../components";
import { reverseActiveCurrencies } from "../state/activeCurrencies.slice";
import { AppDispatch } from "../state";

export const CurrencySwapContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCurrencySwap = () => {
    dispatch(reverseActiveCurrencies());
  };

  return <Button onClick={handleCurrencySwap}>⇅</Button>;
};
