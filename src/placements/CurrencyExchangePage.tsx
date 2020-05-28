import * as React from "react";
import {
  StyledWrapper,
  StyledCircularBG,
  StyledContentContainer,
} from "./CurrencyExchangePage.styles";

export interface CurrencyExchangePageProps {}

const CurrencyExchangePage: React.SFC<CurrencyExchangePageProps> = () => {
  return (
    <StyledWrapper>
      <StyledCircularBG>
        <StyledContentContainer>Hello</StyledContentContainer>
      </StyledCircularBG>
    </StyledWrapper>
  );
};

export default CurrencyExchangePage;
