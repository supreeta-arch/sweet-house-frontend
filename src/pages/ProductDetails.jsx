import { useParams, Link } from "react-router-dom";
import * as ProductsData from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // ✅ Support ALL products.js export styles safely
  let products = [];

  if (typeof ProductsData.getProducts === "function") {
    products = ProductsData.getProducts();
  } else if (Array.isArray(ProductsData.products)) {
    products = ProductsData.products;
  } else if (Array.isArray(ProductsData.default)) {
    products = ProductsData.default;
  }

  // ✅ Always compare as string
  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-xl font-semibold mb-4">
          Product not found
        </h2>
        <p className="text-gray-500 mb-6">
          The product you are looking for does not exist.
        </p>
        <Link
          to="/shop-all"
          className="text-purple-600 underline"
        >
          Back to Shop All
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) =>
      p.category === product.category &&
      String(p.id) !== String(product.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/shop-all" className="hover:underline">
          Shop All
        </Link>{" "}
        / <span className="text-gray-700">{product.name}</span>
      </nav>

      {/* Product section */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="border rounded-xl p-6 bg-white">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          ) : (
            <div className="h-96 flex items-center justify-center text-gray-400">
              No image available
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">
            {product.name}
          </h1>

          <p className="text-lg text-gray-700 mb-4">
            ₹{product.price}{" "}
            {product.weight && `/ ${product.weight}`}
          </p>

          {Array.isArray(product.ingredients) && (
            <>
              <h3 className="font-semibold mb-2">
                Ingredients
              </h3>
              <ul className="list-disc ml-5 text-gray-600 mb-6">
                {product.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </>
          )}

          <button
            onClick={() => addToCart(product)}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6">
            Related Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((rp) => (
              <Link
                key={rp.id}
                to={`/product/${rp.id}`}
                className="border rounded-lg p-4 hover:shadow-md transition"
              >
                <h3 className="font-medium text-sm">
                  {rp.name}
                </h3>
                <p className="text-sm text-gray-600">
                  ₹{rp.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
