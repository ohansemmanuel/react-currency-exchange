import React, { useMemo } from "react";
import { Paragraph } from "../components/Paragraph";
import { AcceptedCurrency } from "../state/currencies.slice";
import { getCurrencyStatement } from "../selectors";
import { useSelector } from "react-redux";
import { RootState } from "../state";

interface BalanceDisplayContainerProps {
  currency: AcceptedCurrency;
}

const makeGetCurrencyStatementSelector = () => getCurrencyStatement;
export const BalanceDisplayContainer = ({
  currency,
}: BalanceDisplayContainerProps) => {
  const selectCurrencyStatement = useMemo(makeGetCurrencyStatementSelector, []);

  const accountStatement = useSelector((state: RootState) =>
    selectCurrencyStatement(state, currency)
  );
  const { symbol, balance } = accountStatement;

  return <Paragraph small>{`Balance: ${symbol}${balance}`}</Paragraph>;
};
