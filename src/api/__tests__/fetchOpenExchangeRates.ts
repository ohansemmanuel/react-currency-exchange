import { fetchOpenExchangeRates } from "../";
import { getMockedResponse, initMock } from "../fetchOpenExchangeRates.mocks";

beforeAll(initMock);

describe("fetchOpenExchangeRates", () => {
  test("should fetch data succesfully", async () => {
    const data = await fetchOpenExchangeRates();
    expect(data).toEqual(getMockedResponse().default);
  });
});
