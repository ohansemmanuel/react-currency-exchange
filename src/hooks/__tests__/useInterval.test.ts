import { useState } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useInterval } from "../useInterval";

// useInterval does NOT trigger state changes. This is more performant, and lets the hook do one thing.
// Internally, @testing-library/react-hooks' rerender fn depends on state updates
// Hence useInterval is tested via the useIntervalTest setup
const useIntervalTest = (initialValue: number, delay: number) => {
  //glorified counter
  const [value, setValue] = useState(initialValue);

  //update count by one via the useInterval hook
  useInterval(() => setValue((v) => v + 1), delay);
  return value;
};

describe("useInterval", () => {
  test("should increase counter after delay", async () => {
    const initialValue = 1;
    const delay = 100;

    const { result, waitForNextUpdate } = renderHook(() =>
      useIntervalTest(initialValue, delay)
    );

    await waitForNextUpdate();
    await waitForNextUpdate();
    expect(result.current).toBe(3);
  });

  test("should update on changing delay", async () => {
    const initialValue = 1;

    const { result, waitForNextUpdate, rerender } = renderHook(
      ({ delay }) => useIntervalTest(initialValue, delay),
      {
        initialProps: { delay: 100 },
      }
    );
    await waitForNextUpdate();
    rerender({ delay: 200 });
    expect(result.current).toBe(2);
  });
});
