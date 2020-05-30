import React, { ReactNode } from "react";
import {
  StyledWrapper,
  StyledCircularBG,
  StyledContentContainer,
} from "./CurrencyExchangePageWrapper.styles";

export interface WrapperProps {
  children: ReactNode;
}

const StyledCurrencyExchangePageWrapper = ({ children }: WrapperProps) => {
  return (
    <StyledWrapper>
      <StyledCircularBG>
        <StyledContentContainer>{children}</StyledContentContainer>
      </StyledCircularBG>
    </StyledWrapper>
  );
};

export default StyledCurrencyExchangePageWrapper;
