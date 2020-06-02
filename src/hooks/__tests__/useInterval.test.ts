import { renderHook } from "@testing-library/react-hooks";
import { useIntervalTest } from "../useIntervalTest";

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
