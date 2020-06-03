import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import { CurrencyExchangePage } from "./placements";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

export const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <CurrencyExchangePage />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
