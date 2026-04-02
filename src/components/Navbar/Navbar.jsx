import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Menu, MoonIcon, SunIcon, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";
import cartSelector from "../../features/cartSelector";

function Navbar({ theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { carts } = useSelector(cartSelector);
  const cartItemsCount = carts.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const dispatch = useDispatch();
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <button
            className="navbar-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="navbar-links"
          >
            <Menu size={24} />
          </button>
          <h2 className="navbar-logo">AFISSHOP</h2>
        </div>

        <div
          id="navbar-links"
          className={`navbar-links ${isMenuOpen ? "navbar-links-open" : ""}`}
        >
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            Cart
          </NavLink>
        </div>

        <div className="navbar-right">
          <button
            className="icon-button"
            onClick={() => dispatch(toggleTheme())}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <SunIcon size={24} color="#fff" />
            ) : (
              <MoonIcon size={24} />
            )}
          </button>
          <Link
            to="/cart"
            className="cart-button"
            aria-label="View shopping cart"
          >
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
