import { objectToQueryParams } from "..";

describe("objectToQueryParams", () => {
  test("with no parameters", () => {
    expect(objectToQueryParams()).toEqual("");
  });

  test("with one parameter", () => {
    expect(objectToQueryParams({ a: 1 })).toEqual("?a=1");
  });

  test("with multiple parameters", () => {
    expect(objectToQueryParams({ a: 1, b: 2 })).toEqual("?a=1&b=2");
  });
});
