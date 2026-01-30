import { useParams } from "react-router-dom";
import products from "../data/products";
import { Star } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(
    (p) => String(p.id) === id
  );

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* IMAGE */}
      <img
        src={product.image?.startsWith('/')
          ? `${import.meta.env.BASE_URL}${product.image.slice(1)}`
          : product.image}
        alt={product.name}
        className="w-full h-96 object-contain"
      />

      {/* DETAILS */}
      <div>
        <h1 className="text-3xl font-bold mb-3">
          {product.name}
        </h1>

        <div className="flex items-center gap-1 text-yellow-500 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
          <span className="text-gray-600 ml-2">
            {product.rating || 4.2}
          </span>
        </div>

        <p className="text-xl font-semibold mb-4">
          ₹{product.price} / {product.weight}
        </p>

        {/* INGREDIENTS */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">
            Ingredients
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {product.ingredients?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          onClick={() =>
            addToCart({ ...product, quantity: 1 })
          }
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
