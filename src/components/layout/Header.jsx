import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks.js";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <NavLink className="logo-name" to="/">
        Mák Dániel
      </NavLink>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <FaTimes aria-hidden="true" focusable="false" />
        ) : (
          <FaBars aria-hidden="true" focusable="false" />
        )}
      </button>

      <nav
        id="primary-navigation"
        className={isMenuOpen ? "site-nav is-open" : "site-nav"}
      >
        {navLinks.map((link) => (
          <NavLink key={link.label} to={link.href} onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
