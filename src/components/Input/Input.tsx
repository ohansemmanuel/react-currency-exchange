import React from "react";
import { StyledInput } from "./Input.styles";

interface InputProps {
  value: number;
  onChange: (evt: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: InputProps) => {
  return <StyledInput value={value} onChange={onChange} />;
};
