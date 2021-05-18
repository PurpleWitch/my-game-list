import { BrowserRouter } from "react-router-dom";
import Reducer from "./redux/reducers.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
