import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootEl = document.querySelector("#root");

if (rootEl) {
  ReactDOM.hydrateRoot(rootEl, app);
}
