import { useAdmin } from "../../context/AdminContext";

export default function Dashboard() {
  const { logout } = useAdmin();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="text-red-600 font-semibold"
        >
          Logout
        </button>
      </div>

      <div className="p-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold mb-2">Products</h2>
          <p className="text-gray-500 text-sm">
            Manage sweets & groceries
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold mb-2">Orders</h2>
          <p className="text-gray-500 text-sm">
            View customer orders
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold mb-2">Customers</h2>
          <p className="text-gray-500 text-sm">
            Customer details
          </p>
        </div>
      </div>
    </div>
  );
}
