import React, { useEffect, useRef } from "react";

type Callback = () => void;

export const useInterval = (callback: Callback, delay: number) => {
  const savedCallback = useRef<Callback>(() => null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => savedCallback.current();

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
