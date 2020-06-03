import { removeCommas } from "../removeCommas";

describe("removeCommas", () => {
  test("it works as expected", () => {
    expect(removeCommas("500")).toEqual("500");
    expect(removeCommas("1,000")).toEqual("1000");
    expect(removeCommas("1,000,200")).toEqual("1000200");
  });
});
