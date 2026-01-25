import AdminLayout from "./AdminLayout";
import products from "../../data/products";

export default function AdminProducts() {
  return (
    <AdminLayout>
      <h2 className="text-xl font-bold mb-4">Products</h2>

      <table className="w-full bg-white rounded">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Name</th>
            <th>Category</th>
            <th>Price (200g)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} className="border-b">
              <td className="p-2">{p.name}</td>
              <td>{p.category}</td>
              <td>₹{p.price}</td>
              <td>Active</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
