import React, { useMemo } from "react";
import { Input } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state";
import {
  getPositionedExchangeInputValue,
  getCurrentExchangeRate,
} from "../selectors";
import { setExchangeInputValues } from "../state/exchangeInputValues.slice";
import { useEffectAfterMount } from "../hooks/useEffectAfterMount";

interface CurrencyInputContainerProps {
  position: 0 | 1;
}

const makeGetPositionedExchangeInputValue = () =>
  getPositionedExchangeInputValue;

export const CurrencyInputContainer = ({
  position,
}: CurrencyInputContainerProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectPositionedExchangeInputValue = useMemo(
    makeGetPositionedExchangeInputValue,
    []
  );
  const inputValue = useSelector((state: RootState) =>
    selectPositionedExchangeInputValue(state, position)
  );
  const currentExchangeRate = useSelector(getCurrentExchangeRate);

  const handleInputValuesUpdate = (value: number) => {
    // set current input value
    dispatch(
      setExchangeInputValues({
        value,
        position,
      })
    );
    // set other input value
    dispatch(
      setExchangeInputValues({
        value: position
          ? value / currentExchangeRate
          : currentExchangeRate * value,
        position: position ? 0 : 1,
      })
    );
  };

  useEffectAfterMount(() => {
    handleInputValuesUpdate(inputValue);
  }, [currentExchangeRate]);

  const handleChange = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    const value = Number(evt.currentTarget.value.replace(/[^0-9]/g, ""));
    handleInputValuesUpdate(value);
  };

  return <Input value={inputValue} onChange={handleChange} />;
};
