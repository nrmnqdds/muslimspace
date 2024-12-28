import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const app = (
  <HelmetProvider>
    <React.StrictMode>
      <Helmet>
        <title>MuslimSpace</title>
      </Helmet>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);

const rootEl = document.querySelector("#root");

if (rootEl) {
  ReactDOM.hydrateRoot(rootEl, app);
}
