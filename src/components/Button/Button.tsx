import React, { ReactNode } from "react";
import { StyledButtonWrapper } from "./Button.styles";

export interface ButtonProps {
  children: ReactNode;
  style?: object;
  onClick: (evt: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onClick, style }: ButtonProps) => {
  return (
    <StyledButtonWrapper onClick={onClick} style={style}>
      {children}
    </StyledButtonWrapper>
  );
};
