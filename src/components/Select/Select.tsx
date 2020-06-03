import React, { useState } from "react";
import { StyledSelect, StyledOption } from "./Select.styles";
import { useEffectAfterMount } from "../../hooks/useEffectAfterMount";

interface SelectProps {
  children: React.ReactNode;
  initialValue?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (evt: React.SyntheticEvent<HTMLSelectElement>) => void;
}
interface OptionProps {
  value: string;
  children: string;
}

export const Option = ({ value, children }: OptionProps) => (
  <StyledOption value={value} data-testid={`select-${value}`}>
    {children}
  </StyledOption>
);

export const Select = ({
  initialValue = "",
  children,
  value,
  onSelect = () => {},
  onChange,
}: SelectProps) => {
  const [state, setState] = useState<string>(initialValue);
  const isControlled = onChange !== undefined && !!value;

  useEffectAfterMount(() => {
    if (!isControlled) {
      onSelect(state);
    }
  }, [state]);

  const handleChange = (evt: React.SyntheticEvent<HTMLSelectElement>) =>
    setState(evt.currentTarget.value);

  const getState = () => (isControlled ? value : state);
  const changeHandler = isControlled ? onChange : handleChange;

  return (
    <StyledSelect onChange={changeHandler} value={getState()}>
      {children}
    </StyledSelect>
  );
};
