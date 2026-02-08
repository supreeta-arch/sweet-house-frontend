import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
    setShowSearch(false);
    setQuery("");
  };

  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-strip">
        FLAT 15% OFF ABOVE ₹999 | <span>COUPON: PAYDAY</span>
      </div>

      {/* Main header */}
      <div className="header-main">
        <div className="menu-icon">☰</div>

        <Link to="/" className="logo">
          <img src="/logo.png" alt="Sweet House" />
        </Link>

        <div className="header-actions">
          {/* Search */}
          <div className="search-wrapper">
            {showSearch && (
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search sweets..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
              </form>
            )}

            <button
              className="search-btn"
              onClick={() => setShowSearch((s) => !s)}
              aria-label="Search"
            >
              {/* Inline SVG – no dependency */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          <Link to="/wishlist" className="icon-btn">❤</Link>
          <Link to="/cart" className="icon-btn">🛒</Link>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="nav">
        <Link to="/">SWEET HOUSE</Link>
        <Link to="/shop">Shop All</Link>
        <Link to="/category/sweets">SWEETS AND SAVOURS</Link>
        <Link to="/about">ABOUT</Link>
      </nav>
    </header>
  );
};

export default Header;
