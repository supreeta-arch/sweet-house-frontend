import { Link, useNavigate } from "react-router-dom";
import products from "../data/products";

const SHOP_ALL_CATEGORIES = [
  { title: "Combos", slug: "combos", status: "na" },
  { title: "Grocery", slug: "grocery", status: "coming-soon" },
  {
    title: "Sweets and Savours",
    slug: "sweets-savours",
    status: "active",
  },
  { title: "Spices and Millets", slug: "spices-millets", status: "coming-soon" },
  { title: "Dry Fruits", slug: "dry-fruits", status: "coming-soon" },
  { title: "Organic", slug: "organic", status: "coming-soon" },
  { title: "Gifting", slug: "gifting", status: "coming-soon" },
];

export default function MegaMenu({ open, closeMenu }) {
  const navigate = useNavigate();
  if (!open) return null;

  return (
    <div className="absolute left-0 top-full w-full bg-white border-t shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-5 gap-10">
        {SHOP_ALL_CATEGORIES.map((cat) => {
          const items = products.filter(
            (p) => p.category === cat.slug
          );

          return (
            <div key={cat.slug} className="min-h-[240px]">
              {/* CATEGORY TITLE */}
              <h4 className="text-sm font-bold text-purple-700 mb-4 uppercase tracking-wide">
                {cat.title}
              </h4>

              {/* NOT AVAILABLE */}
              {cat.status === "na" && (
                <div className="text-sm text-gray-400 italic">
                  Not available
                </div>
              )}

              {/* COMING SOON */}
              {cat.status === "coming-soon" && (
                <div className="flex items-center gap-2 text-sm text-gray-400 italic">
                  <span className="inline-block w-2 h-2 rounded-full bg-gray-300" />
                  Coming soon
                </div>
              )}

              {/* ACTIVE CATEGORY */}
              {cat.status === "active" && (
                <ul className="space-y-2 max-h-[280px] overflow-y-auto pr-2">
                  {items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                          closeMenu();
                        }}
                        className="text-left text-gray-700 hover:text-purple-700 hover:underline text-sm leading-snug"
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

      {/* FOOTER STRIP */}
      <div className="border-t bg-gray-50 py-3 text-center text-sm">
        <Link
          to="/shop-all"
          className="text-purple-700 font-semibold hover:underline"
          onClick={closeMenu}
        >
          View all products →
        </Link>
      </div>
    </div>
  );
}
