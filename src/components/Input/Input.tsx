import React, { forwardRef } from "react";
import { StyledInput } from "./Input.styles";

interface InputProps {
  value: number;
  onChange: (evt: React.SyntheticEvent<HTMLInputElement>) => void;
  style?: {};
}

export const Input = forwardRef(
  ({ value, onChange, style }: InputProps, ref: any) => {
    return (
      <StyledInput value={value} onChange={onChange} ref={ref} style={style} />
    );
  }
);
