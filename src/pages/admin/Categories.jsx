import { useState, useEffect } from "react";

const KEY = "adminCategories";

export default function Categories() {
  const [cats, setCats] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    setCats(JSON.parse(localStorage.getItem(KEY)) || []);
  }, []);

  const save = (data) => {
    localStorage.setItem(KEY, JSON.stringify(data));
    setCats(data);
  };

  const add = () => {
    save([...cats, { name, slug: name.toLowerCase().replace(/\s+/g, "-") }]);
    setName("");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Categories</h1>

      <input
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={add} className="bg-purple-600 text-white px-4 py-2">
        Add
      </button>

      <ul className="mt-6">
        {cats.map((c) => (
          <li key={c.slug}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}
 