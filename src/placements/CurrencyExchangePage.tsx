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
} from "../containers";
import { RateDisplayContainer } from "../containers/RateDisplayContainer";

export const CurrencyExchangePage = () => {
  return (
    <StyledCurrencyExchangePageWrapper>
      {/* Top Content */}
      <StyledTopContentWrapper>
        <StyledWrapper>
          <div>
            <CurrencySelectionContainer position={0} />
          </div>
          <div></div>
        </StyledWrapper>
      </StyledTopContentWrapper>

      {/* Mid Content */}
      <StyledMiddleContentWrapper>
        <CurrencySwapContainer />
        <RateDisplayContainer />
      </StyledMiddleContentWrapper>

      {/* Bottom Content */}
      <StyledBottomContentWrapper>
        <StyledWrapper>
          <div>
            <CurrencySelectionContainer position={1} />
          </div>
        </StyledWrapper>
      </StyledBottomContentWrapper>
    </StyledCurrencyExchangePageWrapper>
  );
};
