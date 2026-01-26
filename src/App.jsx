import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Public pages
import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import Category from "./pages/Category";
import CartPage from "./pages/CartPage";

// Admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminRoute from "./routes/AdminRoute";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/cart" element={<CartPage />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLogin />} />

        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <AdminProducts />
            </AdminRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
