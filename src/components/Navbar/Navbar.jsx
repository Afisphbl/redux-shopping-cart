import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Menu, MoonIcon, SunIcon, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";

function Navbar({ theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <button
            className="navbar-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
          <h2 className="navbar-logo">AFISSHOP</h2>
        </div>

        <div
          className={`navbar-links ${isMenuOpen ? "navbar-links-open" : ""}`}
        >
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Cart
          </NavLink>
        </div>

        <div className="navbar-right">
          <button
            className="icon-button"
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "dark" ? (
              <SunIcon size={24} color="#fff" />
            ) : (
              <MoonIcon size={24} />
            )}
          </button>
          <button className="cart-button">
            <ShoppingCart size={24} />
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
