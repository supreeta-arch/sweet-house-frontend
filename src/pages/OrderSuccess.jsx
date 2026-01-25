import { useLocation, useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">No order found</h2>
      </div>
    );
  }

  const { orderId, total, items, customer } = state;

  /* ---------- MESSAGE CONTENT ---------- */

  const messageText = `
Sweet House Order Confirmation

Order ID: ${orderId}

Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}, ${customer.city} - ${customer.pincode}

Items:
${items
  .map((i) => `${i.name} x ${i.qty} = ₹${i.qty * i.price}`)
  .join("\n")}

Total: ₹${total}

Thank you for ordering with Sweet House!
`;

  const smsLink = `sms:${customer.phone}?body=${encodeURIComponent(
    messageText
  )}`;

  const emailLink = `mailto:?subject=Sweet House Order ${orderId}&body=${encodeURIComponent(
    messageText
  )}`;

  return (
    <div className="max-w-4xl mx-auto text-center py-16 px-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">
        Order Placed Successfully 🎉
      </h1>

      <p className="text-lg mb-2">
        Your Order ID: <strong>{orderId}</strong>
      </p>

      <p className="text-gray-600 mb-8">
        Order confirmation can be sent via SMS or Email.
      </p>

      {/* ACTION BUTTONS */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        <a
          href={smsLink}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Send SMS
        </a>

        <a
          href={emailLink}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Send Email
        </a>
      </div>

      <button
        onClick={() => navigate("/")}
        className="text-purple-700 underline"
      >
        Continue Shopping
      </button>
    </div>
  );
}
