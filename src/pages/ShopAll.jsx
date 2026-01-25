import { useCart } from "../context/CartContext";
import { getProducts } from "../data/products";
import categories from "../data/categories";

export default function ShopAll() {
  const { addToCart } = useCart();
  const products = getProducts();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-12">Shop All</h1>

      {categories.map((category) => {
        const categoryProducts = products.filter(
          (p) => p.category === category.slug
        );

        return (
          <section key={category.slug} className="mb-16">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              {category.name}
            </h2>

            {categoryProducts.length === 0 ? (
              <p className="text-gray-500 italic">
                Products coming soon.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border rounded-xl p-4 shadow-sm flex flex-col hover:shadow-md transition"
                  >
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-44 w-full object-contain mb-4"
                      />
                    )}

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
          </section>
        );
      })}
    </div>
  );
}
