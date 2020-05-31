import React from "react";
import { useSelector } from "react-redux";
import { Paragraph } from "../components/Paragraph";
import { getActiveCurrencySymbols, getCurrentExchangeRate } from "../selectors";
import { modifiedParagraphStyles } from "./RateDisplayContainer.styles";

export const RateDisplayContainer = () => {
  const [currencySymbol1, currencySymbol2] = useSelector(
    getActiveCurrencySymbols
  );
  const exchangeRate = useSelector(getCurrentExchangeRate);

  return (
    <Paragraph style={modifiedParagraphStyles}>
      &#8599; &nbsp; {`${currencySymbol1}1 = ${currencySymbol2}${exchangeRate}`}
    </Paragraph>
  );
};
