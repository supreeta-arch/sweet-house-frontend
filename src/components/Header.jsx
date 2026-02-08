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
          const items = products.filter((p) => p.category === cat.slug);

          return (
            <div key={cat.slug} className="min-h-[240px]">
              <h4 className="text-sm font-bold text-purple-700 mb-4 uppercase tracking-wide">
                {cat.title}
              </h4>

              {cat.status !== "active" && (
                <p className="text-sm text-gray-400 italic">
                  {cat.status === "na" ? "Not available" : "Coming soon"}
                </p>
              )}

              {cat.status === "active" && (
                <ul className="space-y-2 max-h-[280px] overflow-y-auto pr-2">
                  {items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                          closeMenu();
                        }}
                        className="text-left text-sm text-gray-700 hover:text-purple-700 hover:underline"
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

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  /* 🔍 SEARCH STATE */
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  const cartCount = cart.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  const filteredProducts =
    query.trim().length === 0
      ? []
      : products.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        );

  const closeAllMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
    setShowSearch(false);
    setQuery("");
  };

  /* Close search on outside click */
  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const baseNav =
    "relative pb-2 font-semibold text-black hover:text-primary";

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
          onClick={() => setMobileOpen(true)}
        >
          <Menu />
        </button>

        <div className="mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Sweet House"
            className="h-24 md:h-28 w-auto hover:scale-105 transition"
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
        </div>
      </div>

      {/* NAV BAR */}
      <nav
        className="hidden lg:block border-t relative"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center gap-10">
          <NavLink to="/" className={baseNav}>
            SWEET HOUSE
          </NavLink>

          <span
            onMouseEnter={() => setActiveMenu("shop")}
            className={`${baseNav} cursor-pointer`}
          >
            Shop All ▾
          </span>

          <NavLink to="/category/sweets-savours" className={baseNav}>
            SWEETS AND SAVOURS
          </NavLink>

          <NavLink to="/about" className={baseNav}>
            ABOUT
          </NavLink>

          <div
            className="ml-6 bg-primary text-white p-3 rounded-md cursor-pointer"
            onClick={() => setShowSearch((s) => !s)}
          >
            <Search />
          </div>
        </div>

        {activeMenu === "shop" && (
          <ShopAllMegaMenu closeMenu={() => setActiveMenu(null)} />
        )}

        {/* 🔍 SEARCH DROPDOWN */}
        {showSearch && (
          <div
            ref={searchRef}
            className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-xl border rounded-xl p-4 z-50"
          >
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for sweets, snacks..."
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {query && (
              <div className="mt-4 max-h-64 overflow-y-auto">
                {filteredProducts.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No products found
                  </p>
                ) : (
                  filteredProducts.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        navigate(`/product/${p.id}`);
                        closeAllMenus();
                      }}
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
        )}
      </nav>
    </header>
  );
}
