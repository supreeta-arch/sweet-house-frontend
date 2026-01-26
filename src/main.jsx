import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

import { CartProvider } from "./context/CartContext";
import { AdminProvider } from "./context/AdminContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <CartProvider>
        <AdminProvider>
          <App />
        </AdminProvider>
      </CartProvider>
    </HashRouter>
  </React.StrictMode>
);
