import { isEmptyObject } from "./isEmptyObject";

export const objectToQueryParams = (object: Object = {}) =>
  isEmptyObject(object)
    ? ""
    : Object.entries(object).reduce(
        (accumulator, pair, index) =>
          `${accumulator}${index === 0 ? "" : "&"}${pair.join("=")}`,
        "?"
      );
