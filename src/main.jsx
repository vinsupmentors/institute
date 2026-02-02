import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import LoadingProvider from "./components/LoadingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </BrowserRouter>
);
