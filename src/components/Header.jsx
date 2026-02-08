import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setShowSearch(false);
    setQuery("");
  };

  return (
    <header className="header">
      {/* Top logo row */}
      <div className="header-top">
        <img
          src="/logo.png"
          alt="Sweet House"
          className="logo"
          onClick={() => navigate("/")}
        />

        <div className="header-actions">
          {/* Search Button */}
          <button
            className="search-btn"
            aria-label="Search"
            onClick={() => setShowSearch((prev) => !prev)}
          >
            🔍
          </button>

          {/* Wishlist */}
          <span className="icon">❤️</span>

          {/* Cart */}
          <span className="icon">🛒</span>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search sweets, snacks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </form>
      )}
    </header>
  );
}
