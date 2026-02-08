import { NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import products from "../data/products";

/* ---------------- HEADER ---------------- */

export default function Header() {
  const navigate = useNavigate();
  const { cart = [] } = useCart();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);
  const searchBoxRef = useRef(null);

  const cartCount = cart.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  /* ---------- SEARCH LOGIC ---------- */

  const trimmedQuery = query.trim().toLowerCase();

  const results =
    trimmedQuery.length === 0
      ? []
      : products.filter((p) =>
          p.name.toLowerCase().includes(trimmedQuery)
        );

  const closeSearch = () => {
    setShowSearch(false);
    setQuery("");
  };

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
    closeSearch();
  };

  /* Enter + Esc handling */
  useEffect(() => {
    function handleKey(e) {
      if (!showSearch) return;

      if (e.key === "Escape") {
        closeSearch();
      }

      if (e.key === "Enter" && results.length > 0) {
        goToProduct(results[0].id);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showSearch, results]);

  /* Close on outside click */
  useEffect(() => {
    function handleClick(e) {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(e.target)
      ) {
        closeSearch();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  /* Auto focus */
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  /* ---------------- UI ---------------- */

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      {/* TOP STRIP */}
      <div className="bg-[#F3C623] text-center text-sm py-2 font-semibold">
        FLAT 15% OFF ABOVE ₹999 |{" "}
        <span className="text-red-600">COUPON: PAYDAY</span>
      </div>

      {/* LOGO ROW */}
      <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <button
          className="lg:hidden"
          onClick={() => setMobileMenu(true)}
        >
          <Menu />
        </button>

        <NavLink to="/">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Sweet House"
            className="h-20 md:h-24"
          />
        </NavLink>

        <div className="flex items-center gap-5">
          <Heart className="text-red-500 cursor-pointer" />

          <NavLink to="/cart" className="relative">
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>

          <button
            className="bg-primary text-white p-2 rounded-md"
            onClick={() => setShowSearch(true)}
          >
            <Search />
          </button>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden lg:flex justify-center gap-10 py-4 border-t font-semibold">
        <NavLink to="/">SWEET HOUSE</NavLink>
        <NavLink to="/category/sweets-savours">
          SWEETS AND SAVOURS
        </NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </nav>

      {/* ---------- SEARCH OVERLAY (DESKTOP + MOBILE) ---------- */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-24">
          <div
            ref={searchBoxRef}
            className="bg-white w-full max-w-xl mx-4 rounded-xl shadow-xl p-5"
          >
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sweets, snacks..."
                className="flex-1 border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button onClick={closeSearch}>
                <X />
              </button>
            </div>

            {trimmedQuery && (
              <div className="mt-4 max-h-72 overflow-y-auto">
                {results.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No products found
                  </p>
                ) : (
                  results.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => goToProduct(p.id)}
                      className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
                    >
                      <div className="font-medium">{p.name}</div>
                      <div className="text-sm text-gray-500">
                        ₹{p.price} / {p.weight}
                      </div>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
