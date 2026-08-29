import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";
import { CartProvider } from "./context/CartContext";

import "./index.scss";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);