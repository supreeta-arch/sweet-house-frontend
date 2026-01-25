import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders.reverse());
  }, []);

  /* ---------------- EXPORT CSV ---------------- */

  const exportCSV = () => {
    if (!orders.length) {
      alert("No orders to export");
      return;
    }

    const headers = [
      "Order ID",
      "Order Date",
      "Customer Name",
      "Phone",
      "Address",
      "Item Name",
      "Quantity",
      "Price",
      "Item Total",
      "Order Total",
      "Status",
    ];

    const rows = [];

    orders.forEach((order) => {
      order.items.forEach((item) => {
        rows.push([
          order.orderId,
          order.createdAt
            ? new Date(order.createdAt).toLocaleString()
            : "",
          order.name,
          order.phone,
          `${order.address}, ${order.city} - ${order.pincode}`,
          item.name,
          item.qty,
          item.price,
          item.qty * item.price,
          order.total,
          order.status,
        ]);
      });
    });

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows]
        .map((row) =>
          row
            .map((cell) =>
              `"${String(cell ?? "").replace(/"/g, '""')}"`
            )
            .join(",")
        )
        .join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = `sweet-house-orders-${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Orders</h1>

        <button
          onClick={exportCSV}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold"
        >
          Export CSV
        </button>
      </div>

      {orders.length === 0 && (
        <p className="text-gray-500">No orders placed yet.</p>
      )}

      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={order.orderId || index}
            className="bg-white p-5 rounded-lg shadow border"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="font-semibold text-lg">
                  Order ID:{" "}
                  <span className="text-purple-700">
                    {order.orderId}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleString()
                    : ""}
                </p>
              </div>

              <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
                {order.status || "Placed"}
              </span>
            </div>

            {/* Customer */}
            <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <p className="font-semibold">Customer</p>
                <p>{order.name}</p>
                <p>{order.phone}</p>
              </div>

              <div>
                <p className="font-semibold">Delivery Address</p>
                <p>{order.address}</p>
                <p>
                  {order.city} – {order.pincode}
                </p>
              </div>
            </div>

            {/* Items */}
            <div className="mb-4">
              <p className="font-semibold mb-2">Items</p>
              <div className="border rounded">
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between px-3 py-2 border-b last:border-b-0 text-sm"
                  >
                    <span>
                      {item.name} × {item.qty}
                    </span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center font-semibold text-lg">
              <span>Total</span>
              <span className="text-purple-700">
                ₹{order.total}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
