import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">Christopher Tangarife</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/about">About Me</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/works">My Works</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact Me!</NavLink>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default NavBar;
