import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/jwlogo.PNG";
import "../App.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} alt="Jackson Weldon Music" className="Header-logo" />
      </Link>
      <hr/>
      
      <div
        className={`Hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`Header-link-group ${menuOpen ? "show" : ""}`}>
        <Link className="Header-link" to="/" onClick={() => setMenuOpen(false)}>
          HOME
        </Link>
        <Link className="Header-link" to="/shows" onClick={() => setMenuOpen(false)}>
          SHOWS
        </Link>
        <Link className="Header-link" to="/contact" onClick={() => setMenuOpen(false)}>
          CONTACT
        </Link>
      </nav>
    </header>
  );
};

export default Header;
