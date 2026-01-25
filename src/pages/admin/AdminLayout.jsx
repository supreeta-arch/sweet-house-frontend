    export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-primary text-white p-6">
        <h2 className="font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-3 text-sm">
          <a>Dashboard</a>
          <a>Products</a>
          <a>Orders</a>
          <a>Categories</a>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-lightGray">
        {children}
      </main>
    </div>
  );
}