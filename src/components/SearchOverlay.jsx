import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import "./SearchOverlay.css";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  if (!open) return null;

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-overlay">
      <div className="search-box">
        <input
          autoFocus
          type="text"
          placeholder="Search sweets, snacks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="close-btn" onClick={onClose}>✕</button>

        {query && (
          <ul className="search-results">
            {results.length === 0 && (
              <li className="no-results">No products found</li>
            )}

            {results.map((p) => (
              <li
                key={p.id}
                onClick={() => {
                  navigate(`/product/${p.id}`);
                  onClose();
                }}
              >
                {p.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
