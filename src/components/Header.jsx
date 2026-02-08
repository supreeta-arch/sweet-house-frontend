import { NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import products from "../data/products";

/* ---------------- SHOP ALL CONFIG ---------------- */

const SHOP_ALL_CATEGORIES = [
  { title: "Combos", slug: "combos", status: "na" },
  { title: "Grocery", slug: "grocery", status: "coming-soon" },
  { title: "Sweets and Savours", slug: "sweets-savours", status: "active" },
  { title: "Spices and Millets", slug: "spices-millets", status: "coming-soon" },
  { title: "Dry Fruits", slug: "dry-fruits", status: "coming-soon" },
  { title: "Organic", slug: "organic", status: "coming-soon" },
  { title: "Gifting", slug: "gifting", status: "coming-soon" },
];

/* ---------------- SHOP ALL MEGA MENU ---------------- */

function ShopAllMegaMenu({ closeMenu }) {
  const navigate = useNavigate();

  return (
    <div
      className="absolute left-0 top-full w-full bg-white border-t shadow-2xl z-40"
      onMouseLeave={closeMenu}
    >
      <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-5 gap-10">
        {SHOP_ALL_CATEGORIES.map((cat) => {
          const items = products.filter(
            (p) => p.category === cat.slug
          );

          return (
            <div key={cat.slug}>
              <h4 className="text-sm font-bold text-purple-700 mb-4 uppercase">
                {cat.title}
              </h4>

              {cat.status !== "active" && (
                <p className="text-sm text-gray-400 italic">
                  {cat.status === "na"
                    ? "Not available"
                    : "Coming soon"}
                </p>
              )}

              {cat.status === "active" && (
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                          closeMenu();
                        }}
                        className="text-left text-sm hover:text-purple-700"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- HEADER ---------------- */

export default function Header() {
  const navigate = useNavigate();
  const { cart = [] } = useCart();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);
  const searchRef = useRef(null);

  const cartCount = cart.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  const trimmed = query.trim().toLowerCase();

  const results =
    trimmed.length === 0
      ? []
      : products.filter((p) =>
          p.name.toLowerCase().includes(trimmed)
        );

  const closeSearch = () => {
    setShowSearch(false);
    setQuery("");
  };

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    function handleKey(e) {
      if (!showSearch) return;
      if (e.key === "Escape") closeSearch();
      if (e.key === "Enter" && results.length > 0) {
        navigate(`/product/${results[0].id}`);
        closeSearch();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [showSearch, results]);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      {/* TOP STRIP */}
      <div className="bg-[#F3C623] text-center text-sm py-2 font-semibold">
        FLAT 15% OFF ABOVE ₹999 |{" "}
        <span className="text-red-600">COUPON: PAYDAY</span>
      </div>

      {/* LOGO ROW */}
      <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center">
        <button
          className="lg:hidden absolute left-6"
          onClick={() => setMobileMenu(true)}
        >
          <Menu />
        </button>

        <div className="mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Sweet House"
            className="h-24 md:h-28"
          />
        </div>

        <div className="absolute right-6 flex items-center gap-5">
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
            className="bg-primary text-white p-3 rounded-md"
            onClick={() => setShowSearch(true)}
          >
            <Search />
          </button>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav
        className="hidden lg:block border-t relative"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-10">
          <NavLink to="/">SWEET HOUSE</NavLink>
          <span
            onMouseEnter={() => setActiveMenu("shop")}
            className="cursor-pointer"
          >
            Shop All ▾
          </span>
          <NavLink to="/category/sweets-savours">
            SWEETS AND SAVOURS
          </NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </div>

        {activeMenu === "shop" && (
          <ShopAllMegaMenu
            closeMenu={() => setActiveMenu(null)}
          />
        )}
      </nav>

      {/* 🔍 SEARCH OVERLAY – COMPACT FIRST */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center pt-24">
          <div
            ref={searchRef}
            className="w-full max-w-xl mx-4"
          >
            {/* Search bar only */}
            <div className="bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sweets, snacks..."
                className="flex-1 border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button onClick={closeSearch}>
                <X />
              </button>
            </div>

            {/* Results appear ONLY when typing */}
            {trimmed && (
              <div className="mt-2 bg-white rounded-xl shadow-xl max-h-72 overflow-y-auto">
                {results.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center py-4">
                    No products found
                  </p>
                ) : (
                  results.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        navigate(`/product/${p.id}`);
                        closeSearch();
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100"
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

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="bg-white w-72 h-full p-5">
            <button
              className="mb-6"
              onClick={() => setMobileMenu(false)}
            >
              <X />
            </button>

            <nav className="flex flex-col gap-4 font-semibold">
              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
              >
                SWEET HOUSE
              </NavLink>
              <NavLink
                to="/category/sweets-savours"
                onClick={() => setMobileMenu(false)}
              >
                SWEETS AND SAVOURS
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenu(false)}
              >
                ABOUT
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
