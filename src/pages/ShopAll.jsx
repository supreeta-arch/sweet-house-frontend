import { useCart } from "../context/CartContext";
import products from "../data/products";

/**
 * ✅ SHOP ALL – CATEGORY DEFINITIONS
 */
const SHOP_CATEGORIES = [
  {
    name: "Combos",
    slug: "combos",
    status: "na",
  },
  {
    name: "Grocery",
    slug: "grocery",
    status: "coming-soon",
  },
  {
    name: "Sweets and Savours",
    slug: "sweets-savours",
    status: "active",
  },
  {
    name: "Spices and Millets",
    slug: "spices-millets",
    status: "coming-soon",
  },
  {
    name: "Dry Fruits",
    slug: "dry-fruits",
    status: "coming-soon",
  },
  {
    name: "Organic",
    slug: "organic",
    status: "coming-soon",
  },
  {
    name: "Gifting",
    slug: "gifting",
    status: "coming-soon",
  },
];

export default function ShopAll() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-12">Shop All</h1>

      {SHOP_CATEGORIES.map((category) => {
        const categoryProducts = products.filter(
          (p) => p.category === category.slug
        );

        return (
          <section key={category.slug} className="mb-16">
            {/* Category Heading */}
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              {category.name}
            </h2>

            {/* NA */}
            {category.status === "na" && (
              <p className="text-gray-500 italic">
                Items not available at the moment.
              </p>
            )}

            {/* Coming Soon */}
            {category.status === "coming-soon" && (
              <p className="text-gray-500 italic">
                Products coming soon.
              </p>
            )}

            {/* Active Products */}
            {category.status === "active" && (
              <>
                {categoryProducts.length === 0 ? (
                  <p className="text-gray-500 italic">
                    Products will be added soon.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {categoryProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white border rounded-xl p-4 shadow-sm flex flex-col hover:shadow-md transition"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-44 w-full object-contain mb-4"
                        />

                        <h3 className="font-semibold text-base">
                          {product.name}
                        </h3>

                        <p className="text-sm text-gray-600 mb-3">
                          ₹{product.price} / {product.weight}
                        </p>

                        <button
                          onClick={() =>
                            addToCart({ ...product, quantity: 1 })
                          }
                          className="mt-auto border border-purple-600 text-purple-600 py-2 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition"
                        >
                          ADD TO CART
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </section>
        );
      })}
    </div>
  );
}
