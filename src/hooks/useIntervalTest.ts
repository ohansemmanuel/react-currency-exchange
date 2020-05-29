import { useState } from "react";
import { useInterval } from "./useInterval";

// useInterval does NOT trigger state changes. This is more performant, and lets the hook do one thing.
// Internally, @testing-library/react-hooks depends on state updates
// Hence useInterval is tested via the useIntervalTest setup

export const useIntervalTest = (initialValue: number, delay: number) => {
  //glorified counter
  const [value, setValue] = useState(initialValue);

  //update count by one via the useInterval hook
  useInterval(() => setValue((v) => v + 1), delay);
  return value;
};
