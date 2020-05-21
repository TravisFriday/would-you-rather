import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
