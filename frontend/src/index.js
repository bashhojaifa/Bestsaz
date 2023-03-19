import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "animate.css";
// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./assets/scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
