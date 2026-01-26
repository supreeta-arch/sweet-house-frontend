import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart = [], updateQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
        <Link to="/" className="text-purple-600 underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border rounded-lg p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">₹{item.price}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() =>
                      item.quantity > 1 &&
                      updateQty(item.id, item.quantity - 1)
                    }
                    className="px-3 py-1 border rounded"
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQty(item.id, item.quantity + 1)
                    }
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="font-semibold">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-4 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>₹0</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
