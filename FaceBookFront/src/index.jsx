import React from "react";
import ReactDOM from "react-dom";
import "./Style/index.css";
import App from "./App";

import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router routes={App} history={history}>
      <Route path="/">
        <App />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
