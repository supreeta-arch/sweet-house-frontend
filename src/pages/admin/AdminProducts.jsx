import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import { getProducts } from "../../data/products";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <AdminLayout>
      <h2 className="text-xl font-bold mb-4">Products</h2>

      <table className="w-full bg-white rounded border">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Price (200g)</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 && (
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-500">
                No products found
              </td>
            </tr>
          )}

          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-2">{p.name}</td>
              <td className="p-2 capitalize">{p.category}</td>
              <td className="p-2">₹{p.price}</td>
              <td className="p-2">
                <span className="text-green-600 font-medium">
                  Active
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
