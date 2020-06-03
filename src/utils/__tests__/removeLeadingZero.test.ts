import { removeLeadingZero } from "../removeLeadingZero";

describe("removeLeadingZero", () => {
  test("it works as expected", () => {
    expect(removeLeadingZero("0.05")).toEqual("0.05");
    expect(removeLeadingZero("05")).toEqual("5");
    expect(removeLeadingZero("05.00")).toEqual("5.00");
  });
});
