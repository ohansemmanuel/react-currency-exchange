import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Select, Option } from "../components";
import { currencyList, AcceptedCurrency } from "../state/currencies.slice";
import {
  setActiveCurrency,
  reverseActiveCurrencies,
} from "../state/activeCurrencies.slice";
import { AppDispatch, RootState } from "../state";
import { getActiveCurrencies, getPositonedActiveCurrency } from "../selectors";
import { BalanceDisplayContainer } from "./BalanceDisplayContainer";

interface CurrencySelectionContainerProps {
  position: 0 | 1;
}

const makeGetPositonedActiveCurrencySelector = () => getPositonedActiveCurrency;
export const CurrencySelectionContainer = ({
  position,
}: CurrencySelectionContainerProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectPositionedActiveCurrency = useMemo(
    makeGetPositonedActiveCurrencySelector,
    []
  );

  const activeCurrencies = useSelector(getActiveCurrencies);
  const activeCurrency = useSelector((state: RootState) =>
    selectPositionedActiveCurrency(state, position)
  ) as AcceptedCurrency;

  const handleChange = (evt: React.SyntheticEvent<HTMLSelectElement>) => {
    const currentOptionValue = evt.currentTarget.value;
    const otherOptionValueInState = activeCurrencies[position ? 0 : 1];

    if (currentOptionValue === otherOptionValueInState) {
      dispatch(reverseActiveCurrencies());
    } else {
      dispatch(
        setActiveCurrency({
          currency: currentOptionValue as AcceptedCurrency,
          position,
        })
      );
    }
  };

  return (
    <>
      <Select value={activeCurrency} onChange={handleChange}>
        {currencyList.map((currency, index) => (
          <Option value={currency} key={index}>
            {currency.toUpperCase()}
          </Option>
        ))}
      </Select>
      <BalanceDisplayContainer currency={activeCurrency} />
    </>
  );
};
