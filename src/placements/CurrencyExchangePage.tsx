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

export const CurrencyExchangePage = () => {
  return (
    <StyledCurrencyExchangePageWrapper>
      {/* Top Content */}
      <StyledTopContentWrapper>
        <StyledWrapper>
          <div>
            <CurrencySelectionContainer position={0} />
            {/* <p>Balance: 0</p> */}
          </div>
          <div></div>
        </StyledWrapper>
      </StyledTopContentWrapper>

      {/* Mid Content */}
      <StyledMiddleContentWrapper>
        <CurrencySwapContainer />
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
