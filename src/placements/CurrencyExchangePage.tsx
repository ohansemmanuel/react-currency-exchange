import React from "react";

import StyledCurrencyExchangePageWrapper from "./CurrencyExchangePageWrapper";
import {
  StyledTopContentWrapper,
  StyledMiddleContentWrapper,
  StyledBottomContentWrapper,
  StyledWrapper,
} from "./CurrencyExchangePage.styles";
import {
  CurrencySelectionContainer,
  CurrencySwapContainer,
  PollingStopperContainer,
} from "../containers";
import { RateDisplayContainer } from "../containers/RateDisplayContainer";
import { CurrencyInputContainer } from "../containers/CurrencyInputContainer";
import { ExchangeButtonContainer } from "../containers/ExchangeButtonContainer";

const TopBottomContent = ({ position }: { position: 0 | 1 }) => (
  <StyledTopContentWrapper>
    <StyledWrapper>
      <div>
        <CurrencySelectionContainer position={position} />
      </div>
      <div>
        <CurrencyInputContainer position={position} />
      </div>
    </StyledWrapper>
    {position === 1 && <ExchangeButtonContainer />}
  </StyledTopContentWrapper>
);

export const CurrencyExchangePage = () => {
  return (
    <StyledCurrencyExchangePageWrapper>
      {/* Top Content */}
      <TopBottomContent position={0} />

      {/* Mid Content */}
      <StyledMiddleContentWrapper>
        <CurrencySwapContainer />
        <RateDisplayContainer />
        <PollingStopperContainer />
      </StyledMiddleContentWrapper>

      {/* Bottom Content */}
      <TopBottomContent position={1} />
    </StyledCurrencyExchangePageWrapper>
  );
};
