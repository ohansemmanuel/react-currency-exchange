import React, { useMemo, useEffect, useRef, useState } from "react";
import { Input } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state";
import {
  getPositionedExchangeInputValue,
  getCurrentExchangeRate,
  getBalanceExceeded,
  getExchangeLessThanMinimum,
} from "../selectors";
import { setExchangeInputValues } from "../state/exchangeInputValues.slice";
import { useEffectAfterMount } from "../hooks/useEffectAfterMount";
import { Paragraph } from "../components";
import { GRAY, PINK } from "../colors";
import { getPositionedExchangeInputStringValue } from "../selectors/getPositionedExchangeInputStringValue";
import { removeLeadingZero, removeCommas } from "../utils";

interface CurrencyInputContainerProps {
  position: 0 | 1;
}

const minimumAmountStyle = { color: PINK };
const makeGetPositionedExchangeInputValue = () =>
  getPositionedExchangeInputValue;
const makeGetPositionedExchangeInputStringValue = () =>
  getPositionedExchangeInputStringValue;

export const CurrencyInputContainer = ({
  position,
}: CurrencyInputContainerProps) => {
  const inputElementRef = useRef<HTMLInputElement | null>(null);
  const selectPositionedExchangeInputValue = useMemo(
    makeGetPositionedExchangeInputValue,
    []
  );
  const selectPositonedExchangeInputStringValue = useMemo(
    makeGetPositionedExchangeInputStringValue,
    []
  );

  const currentExchangeRate = useSelector(getCurrentExchangeRate);
  const inputValue = useSelector((state: RootState) =>
    selectPositionedExchangeInputValue(state, position)
  );
  const inputStringValue = useSelector((state: RootState) =>
    selectPositonedExchangeInputStringValue(state, position)
  );

  const balanceExceeded = useSelector(getBalanceExceeded);
  const exchangeLessThanMinimum = useSelector(getExchangeLessThanMinimum);

  const dispatch = useDispatch<AppDispatch>();

  const handleInputValuesUpdate = (value: number, stringValue: string) => {
    // set current input value
    dispatch(
      setExchangeInputValues({
        value,
        stringValue,
        position,
      })
    );

    // set other input value
    const positionalValue = position
      ? value / currentExchangeRate
      : currentExchangeRate * value;

    // make sure this is formatted to 2 decimal places
    const formattedPositionalValue =
      Math.round((positionalValue + Number.EPSILON) * 100) / 100;

    dispatch(
      setExchangeInputValues({
        value: formattedPositionalValue,
        stringValue: formattedPositionalValue.toString(),
        position: position ? 0 : 1,
      })
    );
  };

  // Simple focus mgt. on mount
  useEffect(() => {
    if (position === 0) {
      inputElementRef?.current?.focus();
    }
  }, [position]); //position never changes.

  // keep track of input being edited. To show string representation
  const [isEditingInputValue, setIsEditingInputValue] = useState<boolean>(
    false
  );

  // update input values when exchange rate updates
  useEffectAfterMount(() => {
    if (currentExchangeRate && inputValue) {
      handleInputValuesUpdate(inputValue, inputValue.toString());
    }
  }, [currentExchangeRate]);

  const handleChange = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    setIsEditingInputValue(true);

    const sanitizedInput = removeLeadingZero(
      removeCommas(evt.currentTarget.value)
    );

    const patternRegex = /^\d*(\.\d{0,2})?$/;
    const acceptedValue = patternRegex.test(sanitizedInput)
      ? sanitizedInput
      : inputStringValue;

    handleInputValuesUpdate(Number(acceptedValue), acceptedValue);
  };

  const resetIsEditing = () => setIsEditingInputValue(false);

  const updatedInputStyle = useMemo(
    () => (position === 0 && balanceExceeded ? { color: GRAY } : {}),
    [position, balanceExceeded]
  );

  const toCommaSeparatedValue = (val: string) =>
    +val >= 1000 ? new Intl.NumberFormat().format(Number(val)) : val;

  return (
    <>
      <Input
        value={
          isEditingInputValue
            ? toCommaSeparatedValue(inputStringValue)
            : toCommaSeparatedValue(inputValue.toString())
        }
        onChange={handleChange}
        onBlur={resetIsEditing}
        ref={inputElementRef}
        style={updatedInputStyle}
        position={position}
      />
      {position === 0 && balanceExceeded && (
        <Paragraph small>Balance exceeded</Paragraph>
      )}
      {position === 0 && exchangeLessThanMinimum && (
        <Paragraph small style={minimumAmountStyle}>
          Minimum amount is 0.10
        </Paragraph>
      )}
    </>
  );
};
