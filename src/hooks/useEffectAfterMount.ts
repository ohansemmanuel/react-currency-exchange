import { useEffect, useRef } from "react";

type ArrayDependency<T> = Array<T>;
type Callback = () => void;

export const useEffectAfterMount = <T>(
  cb: Callback,
  arrayDep: ArrayDependency<T>
) => {
  const isComponentJustMounted = useRef(true);

  useEffect(() => {
    if (!isComponentJustMounted.current) {
      cb();
    }
    isComponentJustMounted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, arrayDep);
};

/**
 * 👉 Typically, any useEffect call will be run:
 * (i) On Mount,
 * (ii) When any of the array dependencies change.
 *
 * 🤷 For example:
 * useEffect(() => {
 *   this will be called on mount
 * }, [])
 *
 * useEffect(() => {
 *   this will be called on mount ( and when MZN changes)
 * }, [MZN])
 *
 * What if you only want to run an effect function ONLY
 * when a dependency changes but NOT on mount?
 *
 * 🚀 That's the problem this custom hook solves
 * */
