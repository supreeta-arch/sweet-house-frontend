import { Routes, Route, useLocation } from "react-router-dom";

/* Storefront */
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import ShopAll from "./pages/ShopAll";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import OrderSuccess from "./pages/OrderSuccess";
import WhatsAppChat from "./components/WhatsAppChat";

/* Admin */
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import ProtectedAdmin from "./components/admin/ProtectedAdmin";
import AdminLayout from "./components/admin/AdminLayout";

export default function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Storefront Header */}
      {!isAdmin && <Header />}

      <Routes>
        {/* ---------- STORE ---------- */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/about" element={<About />} />

        {/* ---------- ADMIN LOGIN ---------- */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* ---------- ADMIN (PROTECTED) ---------- */}
        <Route
          path="/admin/*"
          element={
            <ProtectedAdmin>
              <AdminLayout />
            </ProtectedAdmin>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>

      {!isAdmin && <WhatsAppChat />}
    </>
  );
}
