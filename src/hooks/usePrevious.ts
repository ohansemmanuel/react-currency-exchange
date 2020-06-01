import { useEffect, useRef } from "react";

/**
 * keeps track of, and returns the previous within a functional component
 * e.g useful for accessing previous props/state value
 */
export function usePrevious<T>(value: T): T | null {
  const ref = useRef<T | null>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current === undefined ? null : ref.current;
}
