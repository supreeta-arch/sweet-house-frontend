import { Link, useNavigate } from "react-router-dom";
import products from "../data/products";

const SHOP_ALL_CATEGORIES = [
  { title: "Combos", slug: "combos", status: "na" },
  { title: "Grocery", slug: "grocery", status: "coming-soon" },
  { title: "Sweets and Savours", slug: "sweets-savours", status: "active" },
  { title: "Spices and Millets", slug: "spices-millets", status: "coming-soon" },
  { title: "Dry Fruits", slug: "dry-fruits", status: "coming-soon" },
];

export default function MegaMenu({ open, closeMenu }) {
  const navigate = useNavigate();

  if (!open) return null;

  const sweetsProducts = products.filter(
    (p) => p.category === "sweets-savours"
  );

  const featured = sweetsProducts[0];

  return (
    <div className="absolute left-0 top-full w-full bg-white border-t shadow-2xl z-50">

      <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-3 gap-12">

        {/* CATEGORY LIST */}
        <div>
          <h4 className="text-sm font-bold text-purple-700 mb-4 uppercase">
            Categories
          </h4>

          <ul className="space-y-3">
            {SHOP_ALL_CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <button
                  className="text-gray-700 hover:text-purple-700 text-sm"
                  onClick={() => {
                    if (cat.status === "active") {
                      navigate("/shop-all");
                    }
                    closeMenu();
                  }}
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCT LIST */}
        <div>
          <h4 className="text-sm font-bold text-purple-700 mb-4 uppercase">
            Sweets and Savours
          </h4>

          <div className="grid grid-cols-2 gap-x-10 gap-y-2 max-h-[320px] overflow-y-auto">
            {sweetsProducts.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  closeMenu();
                }}
                className="text-left text-gray-700 hover:text-purple-700 hover:underline text-sm"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED PRODUCT */}
        <div className="border rounded-xl p-4 bg-gray-50">
          <h4 className="text-sm font-bold text-purple-700 mb-4 uppercase">
            Featured
          </h4>

          {featured && (
            <div className="text-center">
              <img
                src={featured.image}
                alt={featured.name}
                className="h-28 mx-auto object-contain mb-3"
              />

              <p className="text-sm font-semibold mb-1">
                {featured.name}
              </p>

              <p className="text-sm text-gray-600 mb-3">
                ₹{featured.price} / {featured.weight}
              </p>

              <button
                onClick={() => {
                  navigate(`/product/${featured.id}`);
                  closeMenu();
                }}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700"
              >
                View Product
              </button>
            </div>
          )}
        </div>

      </div>

      {/* FOOTER */}
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