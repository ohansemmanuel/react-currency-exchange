import React, { forwardRef } from "react";
import { StyledInput } from "./Input.styles";

interface InputProps {
  value: number;
  onChange: (evt: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef(({ value, onChange }: InputProps, ref: any) => {
  return <StyledInput value={value} onChange={onChange} ref={ref} />;
});
