import React from "react";
import { Provider } from "react-redux";
import { CurrencyExchangePage } from "../placements/";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { store } from "../state";
import {
  initMock,
  getMockedResponse,
} from "../api/fetchOpenExchangeRates.mocks";
import { roundToTwoDecimalPlaces } from "../utils/roundToTwoDecimalPlaces";

const getTestComponent = () => (
  <Provider store={store}>
    <CurrencyExchangePage />
  </Provider>
);

describe("CurrencyExchangePage", () => {
  beforeEach(initMock);

  test("contains at least three pockets with USD, EUR, GBP currencies", async () => {
    const { queryAllByTestId } = render(getTestComponent());

    const usdSelectEl = await waitForElement(() =>
      queryAllByTestId("select-usd")
    );
    const eurSelectEl = await waitForElement(() =>
      queryAllByTestId("select-eur")
    );
    const gbpSelectEl = await waitForElement(() =>
      queryAllByTestId("select-gbp")
    );

    expect(usdSelectEl).toBeTruthy();
    expect(eurSelectEl).toBeTruthy();
    expect(gbpSelectEl).toBeTruthy();
  });

  test("can exchange between pockets", async () => {
    const { queryByTestId } = render(getTestComponent());
    // by default, initial exchange is between "USD" and "EUR"
    const exchangeAmount = 10;
    const mockedExchangeRate = getMockedResponse().default.rates.EUR;

    const state = store.getState();
    const initialUSDBalance = state.currencies.usd.balance;
    // const initialEURBalance = state.currencies.eur.balance;

    //fill first input vcalue for exchange
    const exchangeFromEl = queryByTestId("exchange-input-0");
    expect(exchangeFromEl).toBeTruthy();

    fireEvent.change(exchangeFromEl as HTMLInputElement, {
      target: { value: "10" },
    });

    //second input value MUST be autoFilled with exchange equivalent
    const exchangeToEl = queryByTestId("exchange-input-1") as HTMLInputElement;
    const expectedExchangeToAmount = roundToTwoDecimalPlaces(
      exchangeAmount * mockedExchangeRate
    ).toString(); // "9"

    expect(exchangeToEl.value).toEqual(expectedExchangeToAmount);

    //click exchange
    const exchangeBtnEl = queryByTestId("exchange-btn") as HTMLInputElement;
    fireEvent.click(exchangeBtnEl);

    //account balances MUST be updated now
    const usdBalanceEl = queryByTestId("balance-statement-usd");
    const eurBalanceEl = queryByTestId("balance-statement-eur");

    const expectedUSDBalance = initialUSDBalance - exchangeAmount; //2
    // const expectedEURBalance = initialEURBalance + exchangeAmount; // 3555 ~ 3,555

    expect(usdBalanceEl?.textContent).toBe(`Balance: $${expectedUSDBalance}`);
    expect(eurBalanceEl?.textContent).toBe(`Balance: €3,555`); //expectedEURBalance
  });

  test("validates exchange inputs with two digits after the dot", () => {
    const { queryByTestId } = render(getTestComponent());
    const exchangeFromEl = queryByTestId(
      "exchange-input-0"
    ) as HTMLInputElement;

    fireEvent.change(exchangeFromEl, { target: { value: "10.78" } });
    expect(exchangeFromEl.value).toEqual("10.78");
    //trigger the addition of more values
    fireEvent.change(exchangeFromEl, { target: { value: "10.785656" } });
    // input value should remain same @ 2 digits
    expect(exchangeFromEl.value).toEqual("10.78");
    //ignore asserting on second input as they stem from same component.
  });
});
