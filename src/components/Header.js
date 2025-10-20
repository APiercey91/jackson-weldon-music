import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../images/jwlogo.PNG";

const Header = () => {
  return (
    // <header style={styles.header}>
    <header className="Header">
      {/* <h1 className="Header-title">Jackson Weldon Music</h1> */}
      <Link to="/">
        <img src={logo} alt="Jackson Weldon Music" className="Header-logo" />
      </Link>
      <hr />
      <nav className="Header-link-group">
        <Link className="Header-link" to="/">
          HOME
        </Link>
        <Link className="Header-link" to="/">
          SHOWS
        </Link>
        <Link className="Header-link" to="/">
          CONTACT
        </Link>
      </nav>
    </header>
  );
};

export default Header;
