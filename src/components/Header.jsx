import { NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
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
      className="absolute left-0 top-full w-full bg-white border-t shadow-2xl z-50"
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

              {cat.status === "na" && (
                <p className="text-sm text-gray-400 italic">
                  Not available
                </p>
              )}

              {cat.status === "coming-soon" && (
                <p className="text-sm text-gray-400 italic">
                  Coming soon
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
                        className="text-left text-sm text-gray-700 hover:text-purple-700 hover:underline leading-snug"
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

      <div className="border-t bg-gray-50 py-3 text-center text-sm">
        <NavLink
          to="/shop-all"
          className="text-purple-700 font-semibold hover:underline"
          onClick={closeMenu}
        >
          View all products →
        </NavLink>
      </div>
    </div>
  );
}

/* ---------------- HEADER ---------------- */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const { cart = [] } = useCart();
  const cartCount = cart.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  const closeAllMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

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

        {/* EXTRA-LARGE, PREMIUM LOGO */}
        <div className="mx-auto flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Sweet House"
            className="
              h-24 md:h-28   /* ⬅️ increased again */
              w-auto
              transition-transform duration-300
              hover:scale-105
            "
          />
        </div>

        <div className="absolute right-6 flex items-center gap-5">
          <Heart className="text-red-500 cursor-pointer" />
          <NavLink to="/cart" className="relative" onClick={closeAllMenus}>
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
        onMouseLeave={closeAllMenus}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center gap-10">
          <NavLink to="/" className={baseNav} onClick={closeAllMenus}>
            SWEET HOUSE
          </NavLink>

          <span
            onMouseEnter={() => setActiveMenu("shop")}
            className={`${baseNav} cursor-pointer`}
          >
            Shop All ▾
          </span>

          <NavLink
            to="/category/sweets-savours"
            className={baseNav}
            onClick={closeAllMenus}
          >
            SWEETS AND SAVOURS
          </NavLink>

          <NavLink
            to="/about"
            className={baseNav}
            onClick={closeAllMenus}
          >
            ABOUT
          </NavLink>

          <div
            className="ml-6 bg-primary text-white p-3 rounded-md cursor-pointer"
            onClick={closeAllMenus}
          >
            <Search />
          </div>
        </div>

        {activeMenu === "shop" && (
          <ShopAllMegaMenu closeMenu={closeAllMenus} />
        )}
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-[9999] p-6 lg:hidden">
          <div className="flex justify-between mb-6">
            <img src="/logo.png" className="h-20" />
            <X onClick={closeAllMenus} />
          </div>
        </div>
      )}
    </header>
  );
}
