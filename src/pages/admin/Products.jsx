import { useEffect, useState } from "react";
import categories from "../../data/categories";

const STORAGE_KEY = "adminProducts";

/* ---------------- CATEGORY NORMALIZER ---------------- */
const normalizeCategory = (slug) => {
  const map = {
    sweets: "sweets-savours",
    mixture: "sweets-savours",
    chips: "sweets-savours",
  };
  return map[slug] || slug;
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    weight: "200g",
    ingredients: "",
    image: "",
    inStock: true,
  });

  /* ---------------- LOAD + AUTO FIX ---------------- */
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const normalized = stored.map((p) => ({
      ...p,
      category: normalizeCategory(p.category),
    }));

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(normalized)
    );
    setProducts(normalized);
  }, []);

  /* ---------------- SAVE ---------------- */
  const saveProducts = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setProducts(data);
  };

  /* ---------------- IMAGE UPLOAD ---------------- */
  const handleImageUpload = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setForm((f) => ({ ...f, image: reader.result }));
    reader.readAsDataURL(file);
  };

  /* ---------------- ADD PRODUCT ---------------- */
  const addProduct = () => {
    if (!form.name || !form.category || !form.price) {
      alert("Name, Category and Price are required");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: form.name,
      category: form.category, // always canonical slug
      price: Number(form.price),
      weight: form.weight,
      image: form.image,
      inStock: true,
      rating: 4.2,
      ingredients: form.ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
    };

    saveProducts([...products, newProduct]);

    setForm({
      name: "",
      category: "",
      price: "",
      weight: "200g",
      ingredients: "",
      image: "",
      inStock: true,
    });
  };

  /* ---------------- DELETE ---------------- */
  const deleteProduct = (id) => {
    if (!window.confirm("Delete this product?")) return;
    saveProducts(products.filter((p) => p.id !== id));
  };

  /* ---------------- STOCK TOGGLE ---------------- */
  const toggleStock = (id) => {
    saveProducts(
      products.map((p) =>
        p.id === id ? { ...p, inStock: !p.inStock } : p
      )
    );
  };

  /* ---------------- EDIT SAVE ---------------- */
  const saveEdit = () => {
    saveProducts(
      products.map((p) =>
        p.id === editing.id
          ? { ...editing, category: normalizeCategory(editing.category) }
          : p
      )
    );
    setEditing(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Admin – Products
      </h1>

      {/* ADD PRODUCT */}
      <div className="bg-white p-6 rounded-xl shadow mb-10 grid md:grid-cols-2 gap-6">
        <input
          className="border p-2 rounded"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        {/* DYNAMIC CATEGORY SELECT */}
        <select
          className="border p-2 rounded"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          className="border p-2 rounded"
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          className="border p-2 rounded"
          placeholder="Weight (200g)"
          value={form.weight}
          onChange={(e) =>
            setForm({ ...form, weight: e.target.value })
          }
        />

        <textarea
          className="border p-2 rounded md:col-span-2"
          placeholder="Ingredients (comma separated)"
          value={form.ingredients}
          onChange={(e) =>
            setForm({ ...form, ingredients: e.target.value })
          }
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            handleImageUpload(e.target.files[0])
          }
        />

        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            className="h-32 rounded"
          />
        )}

        <button
          onClick={addProduct}
          className="bg-purple-600 text-white px-6 py-2 rounded font-semibold md:col-span-2"
        >
          Add Product
        </button>
      </div>

      {/* PRODUCT LIST */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className={`bg-white p-4 rounded-xl shadow ${
              !p.inStock ? "opacity-50" : ""
            }`}
          >
            {p.image && (
              <img
                src={p.image}
                className="h-40 w-full object-contain mb-3"
              />
            )}

            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600">
              ₹{p.price} / {p.weight}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              Category:{" "}
              {categories.find((c) => c.slug === p.category)?.name}
            </p>

            <div className="flex justify-between mt-4 text-sm">
              <button
                className="text-blue-600"
                onClick={() => setEditing(p)}
              >
                Edit
              </button>

              <button
                className="text-yellow-600"
                onClick={() => toggleStock(p.id)}
              >
                {p.inStock ? "Disable" : "Enable"}
              </button>

              <button
                className="text-red-600"
                onClick={() => deleteProduct(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h2 className="font-bold mb-4">Edit Product</h2>

            <input
              className="border p-2 w-full mb-3"
              value={editing.name}
              onChange={(e) =>
                setEditing({ ...editing, name: e.target.value })
              }
            />

            <select
              className="border p-2 w-full mb-3"
              value={editing.category}
              onChange={(e) =>
                setEditing({ ...editing, category: e.target.value })
              }
            >
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>

            <input
              className="border p-2 w-full mb-3"
              value={editing.price}
              onChange={(e) =>
                setEditing({ ...editing, price: e.target.value })
              }
            />

            <button
              onClick={saveEdit}
              className="bg-purple-600 text-white px-4 py-2 rounded w-full"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
