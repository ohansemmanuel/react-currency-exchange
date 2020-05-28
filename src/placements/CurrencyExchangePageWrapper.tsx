import React, { ReactNode } from "react";
import {
  StyledWrapper,
  StyledCircularBG,
  StyledContentContainer,
} from "./CurrencyExchangePageWrapper.styles";

export interface WrapperProps {
  children: ReactNode;
}

const CurrencyExchangePageWrapper = ({ children }: WrapperProps) => {
  return (
    <StyledWrapper>
      <StyledCircularBG>
        <StyledContentContainer>{children}</StyledContentContainer>
      </StyledCircularBG>
    </StyledWrapper>
  );
};

export default CurrencyExchangePageWrapper;
