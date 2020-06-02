import { useState } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useEffectAfterMount } from "../useEffectAfterMount";

describe("useEffectAfterMount", () => {
  test("does not invoke callback on mount", () => {
    const mockCallback = jest.fn();
    renderHook(() => useEffectAfterMount(mockCallback, []));

    expect(mockCallback.mock.calls.length).toBe(0);
  });
  test("invokes callback after mount", () => {
    const mockCallback = jest.fn();

    const useTestAfterMount = (cb: () => void) => {
      const [v, sv] = useState(0);
      const increaseVal = () => sv((v) => v + 1);
      useEffectAfterMount(cb, [v]);
      return { v, increaseVal };
    };

    const { result } = renderHook(() => useTestAfterMount(mockCallback));
    act(() => {
      result.current.increaseVal();
    });
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
