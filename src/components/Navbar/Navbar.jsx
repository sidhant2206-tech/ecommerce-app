import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../store/cartSlice";
import { selectWishlistCount } from "../../store/wishlistSlice";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

export default function Navbar() {
  const totalItems = useSelector(selectTotalItems);
  const wishlistCount = useSelector(selectWishlistCount);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        ShopEase
      </Link>

      <div className="navbar-search">
        <SearchBar />
      </div>

      <nav className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/wishlist">
          Wishlist
          {wishlistCount > 0 && (
            <span className="cart-badge">{wishlistCount}</span>
          )}
        </NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </NavLink>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}