//External Lib Import
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//Internal Lib Import
import App from "./App";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/fontawesome.css";
import "../src/assets/css/placeholder-loading.min.css";
import "./locales/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
