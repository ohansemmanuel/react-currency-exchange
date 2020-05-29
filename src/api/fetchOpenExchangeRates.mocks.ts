import fetchMock from "fetch-mock";
import { BASE_URL } from "./fetchOpenExchangeRates";

const DEFAULT_RESPONSE = {
  timestamp: 1590742800,
  base: "USD",
  rates: {
    EUR: 0.899524,
    GBP: 0.813339,
    USD: 1,
  },
};

export const getMockedResponse = (newBase?: "GBP" | "EUR") => ({
  default: DEFAULT_RESPONSE,
  changedBase: {
    ...DEFAULT_RESPONSE,
    base: newBase,
  },
});

export const initMock = () => {
  fetchMock.get(`begin:${BASE_URL}`, {
    status: 200,
    body: getMockedResponse().default,
  });
};
