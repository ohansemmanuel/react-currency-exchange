import React, { ReactNode } from "react";
import { StyledButtonWrapper } from "./Button.styles";

export interface ButtonProps {
  children: ReactNode;
  style?: object;
  cta?: boolean;
  disabled?: boolean;
  onClick: (evt: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  children,
  onClick,
  cta,
  style,
  disabled,
}: ButtonProps) => {
  return (
    <StyledButtonWrapper
      onClick={onClick}
      style={style}
      cta={cta}
      disabled={disabled}
    >
      {children}
    </StyledButtonWrapper>
  );
};
