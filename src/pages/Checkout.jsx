import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart = [], clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",        // ✅ ADDED
    address: "",
    city: "",
    pincode: "",
  });

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    const { name, phone, email, address, city, pincode } = form;

    if (!name || !phone || !email || !address || !city || !pincode) {
      alert("Please fill all delivery details");
      return;
    }

    const orderId = "SH" + Date.now();

    /* ---------------- SAVE ORDER ---------------- */

    const order = {
      orderId,
      name,
      phone,
      email, // ✅ STORED
      address,
      city,
      pincode,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        qty: item.quantity,
        price: item.price,
      })),
      total,
      status: "Placed",
      createdAt: new Date().toISOString(),
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, order])
    );

    /* ---------------- PREPARE WHATSAPP MESSAGE (NO AUTO OPEN) ---------------- */

    let message = `🧁 Sweet House Order\n`;
    message += `Order ID: ${orderId}\n\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `Email: ${email}\n`;
    message += `Address: ${address}, ${city} - ${pincode}\n\n`;
    message += `Items:\n`;

    cart.forEach((item) => {
      message += `- ${item.name} x ${item.quantity} = ₹${
        item.price * item.quantity
      }\n`;
    });

    message += `\nTotal: ₹${total}`;

    /* ---------------- NAVIGATE TO SUCCESS ---------------- */

    navigate("/order-success", {
      state: {
        orderId,
        total,
        items: order.items,
        customer: form,
        whatsappMessage: message,
      },
    });

    clearCart();
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* DELIVERY DETAILS */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Delivery Details</h2>

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          {/* ✅ EMAIL FIELD */}
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <textarea
            name="address"
            placeholder="Full Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />

            <input
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>
      </div>

      {/* ORDER SUMMARY */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

        <div className="border rounded-lg p-4 mb-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2 text-sm">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <hr className="my-3" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        <button
          onClick={placeOrder}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold"
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
