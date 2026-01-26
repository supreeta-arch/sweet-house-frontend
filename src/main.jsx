import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import { AdminProvider } from "./context/AdminContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <AdminProvider>
        <App />
        </AdminProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

