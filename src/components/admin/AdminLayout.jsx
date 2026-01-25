import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";

export default function AdminLayout() {
  const { logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-primary text-white p-6">
        <h2 className="text-xl font-bold mb-8">Sweet House Admin</h2>

        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link to="/admin/products" className="block hover:underline">
            Products
          </Link>
          <Link to="/admin/orders" className="block hover:underline">
            Orders
          </Link>

          <button
            onClick={handleLogout}
            className="mt-6 text-red-300 hover:text-red-400"
          >
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
