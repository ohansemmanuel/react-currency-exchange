import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paragraph } from "../components";
import {
  getActiveCurrencySymbols,
  getCurrentExchangeRate,
  getActiveCurrencies,
} from "../selectors";
import { modifiedParagraphStyles } from "./RateDisplayContainer.styles";
import { AppDispatch } from "../state";
import { setPollingStarted, setPollingStopped } from "../state/polling.slice";
import { Base as CurrencyExchangeType } from "../api/fetchOpenExchangeRates";
import { useEffectAfterMount } from "../hooks/useEffectAfterMount";
import { resetConversionRate } from "../state/currentConversionRate.slice";

export const RateDisplayContainer = () => {
  const [activeCurrency1, activeCurrency2] = useSelector(getActiveCurrencies);
  const [currencySymbol1, currencySymbol2] = useSelector(
    getActiveCurrencySymbols
  );

  const exchangeRate = useSelector(getCurrentExchangeRate);
  const dispatch = useDispatch<AppDispatch>();

  const intialExchangeBase = useRef<CurrencyExchangeType>(
    activeCurrency1.toUpperCase() as CurrencyExchangeType
  );
  const initialExchangeTo = useRef<CurrencyExchangeType>(
    activeCurrency2.toUpperCase() as CurrencyExchangeType
  );

  const currencyExchangeBase = activeCurrency1.toUpperCase() as CurrencyExchangeType;
  const currencyExchangeTo = activeCurrency2.toUpperCase() as CurrencyExchangeType;

  // start polling on mount
  useEffect(() => {
    dispatch(
      setPollingStarted({
        base: intialExchangeBase.current,
        to: initialExchangeTo.current,
      })
    );
  }, [dispatch]); // dispatch's reference remains the same. This is fine.

  //handle polling behaviour on subsequent currency changes
  useEffectAfterMount(() => {
    // stop previous polling (with old base->to currencies)
    dispatch(setPollingStopped());
    // reset current rate
    dispatch(resetConversionRate());
    // start new poll with new currency values
    dispatch(
      setPollingStarted({
        base: currencyExchangeBase,
        to: currencyExchangeTo,
      })
    );
  }, [currencySymbol1, currencySymbol2]);

  return (
    <Paragraph style={modifiedParagraphStyles}>
      &#8599; &nbsp;{" "}
      {!!exchangeRate &&
        `${currencySymbol1}1 = ${currencySymbol2}${exchangeRate}`}
    </Paragraph>
  );
};
