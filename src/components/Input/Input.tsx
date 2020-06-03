import React, { forwardRef } from "react";
import {
  StyledInput,
  StyledInputWrapper,
  StyledSuffixWrapper,
} from "./Input.styles";
import { removeCommas } from "../../utils";

interface InputProps {
  value: string;
  onChange: (evt: React.SyntheticEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  position: 0 | 1;
  style?: {};
}

export const Input = forwardRef(
  ({ value, onChange, onBlur, position, style }: InputProps, ref: any) => {
    const suffix = position === 0 ? "-" : "+";
    const shouldShowSuffix = !!+removeCommas(value);

    return (
      <StyledInputWrapper>
        {/* render suffix */}
        {shouldShowSuffix && (
          <StyledSuffixWrapper>{suffix}</StyledSuffixWrapper>
        )}
        {/* render input */}
        <StyledInput
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          style={style}
          placeholder="0"
        />
      </StyledInputWrapper>
    );
  }
);
