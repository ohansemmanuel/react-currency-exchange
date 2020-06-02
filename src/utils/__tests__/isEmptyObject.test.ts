import { isEmptyObject } from "..";

describe("isEmptyObject", () => {
  test("should be true with no arguments", () => {
    expect(isEmptyObject()).toEqual(true);
  });
  test("should be true with empty object", () => {
    expect(isEmptyObject({})).toEqual(true);
  });
  test("should be false with non empty objects", () => {
    expect(isEmptyObject({ a: "a" })).toEqual(false);
  });
});
