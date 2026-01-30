import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const goToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="
        bg-white border rounded-2xl p-4
        hover:shadow-lg transition cursor-pointer
        flex flex-col
      "
      onClick={goToProduct}
    >
      {/* IMAGE */}
      <img
        src={product.image?.startsWith('/')
          ? `${import.meta.env.BASE_URL}${product.image.slice(1)}`
          : product.image}
        alt={product.name}
        className="h-40 w-full object-contain mb-4"
      />

      {/* TITLE */}
      <h3 className="font-semibold text-lg mb-1">
        {product.name}
      </h3>

      {/* RATING */}
      <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
        <span className="text-gray-600 ml-1">
          {product.rating || 4.2}
        </span>
      </div>

      {/* PRICE */}
      <p className="text-sm text-gray-700 mb-3">
        ₹{product.price} / {product.weight}
      </p>

      {/* QUANTITY + PRICE */}
      <div
        className="flex items-center justify-between mb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <button
            className="border px-2 py-1 rounded"
            onClick={() => setQty(Math.max(1, qty - 1))}
          >
            −
          </button>
          <span>{qty}</span>
          <button
            className="border px-2 py-1 rounded"
            onClick={() => setQty(qty + 1)}
          >
            +
          </button>
        </div>

        <span className="text-purple-600 font-semibold">
          ₹{product.price * qty}
        </span>
      </div>

      {/* ADD TO CART */}
      <button
        className="mt-auto border border-purple-600 text-purple-600 py-2 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition"
        onClick={(e) => {
          e.stopPropagation();
          addToCart({ ...product, quantity: qty });
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}
