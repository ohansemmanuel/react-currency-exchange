import React, { useMemo } from "react";
import { Input } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state";
import { getPositionedExchangeInputValue } from "../selectors";
import { setExchangeInputValues } from "../state/exchangeInputValues.slice";

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

  const handleChange = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    dispatch(
      setExchangeInputValues({
        value: Number(evt.currentTarget.value),
        position,
      })
    );
  };

  return <Input value={inputValue} onChange={handleChange} />;
};
