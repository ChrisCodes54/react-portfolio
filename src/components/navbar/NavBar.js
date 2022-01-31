import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mr-auto">
      <NavLink className="navbar-brand" to="/">
        Christopher Tangarife
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      </button>
      
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/about">
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/works">
              My Works
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact Me
            </NavLink>
          </li>
        </ul>
      
    </nav>
  );
}

export default NavBar;
