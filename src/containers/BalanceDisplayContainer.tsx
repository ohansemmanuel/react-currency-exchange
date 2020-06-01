import React, { useMemo } from "react";
import { Paragraph } from "../components";
import { AcceptedCurrency } from "../state/currencies.slice";
import { getCurrencyStatement, getBalanceExceeded } from "../selectors";
import { useSelector } from "react-redux";
import { RootState } from "../state";
import { PINK } from "../colors";

interface BalanceDisplayContainerProps {
  currency: AcceptedCurrency;
  position: 0 | 1;
}

const makeGetCurrencyStatementSelector = () => getCurrencyStatement;
export const BalanceDisplayContainer = ({
  currency,
  position,
}: BalanceDisplayContainerProps) => {
  const selectCurrencyStatement = useMemo(makeGetCurrencyStatementSelector, []);
  const balanceExceeded = useSelector(getBalanceExceeded);
  const accountStatement = useSelector((state: RootState) =>
    selectCurrencyStatement(state, currency)
  );
  const { symbol, balance } = accountStatement;

  const updatedParagraphStyle = useMemo(
    () => (position === 0 && balanceExceeded ? { color: PINK } : {}),
    [position, balanceExceeded]
  );

  return (
    <Paragraph
      small
      style={updatedParagraphStyle}
    >{`Balance: ${symbol}${balance}`}</Paragraph>
  );
};
