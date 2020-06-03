import { objectToQueryParams } from "../utils";

export const BASE_URL = "https://openexchangerates.org/api/latest.json";

// This should NEVER be done in a real world app. Will leave here for ease. ID will eventually be deactivated.
const APP_ID = "20f1c7c6661b4d5dbff337c73d9d251f";
const CURRENCY_LIST = "USD,GBP,EUR";
const DEFAULT_EXCHANGE_BASE = "USD";

export type Base = "USD" | "GBP" | "EUR";

export const fetchOpenExchangeRates = async (
  base: Base = DEFAULT_EXCHANGE_BASE
) => {
  const params = { base, app_id: APP_ID, symbols: CURRENCY_LIST };
  const url = `${BASE_URL}${objectToQueryParams(params)}`;

  try {
    const response = await fetch(url, { method: "GET" });
    const { status } = response;

    if (status === 201 || status === 200) {
      const data = await response.json();
      return data;
    }

    throw new Error("failed request");
  } catch (error) {
    throw new Error(error);
  }
};
