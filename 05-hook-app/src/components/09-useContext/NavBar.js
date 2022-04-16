import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">UseContext</Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="login">Login</NavLink>
      </div>
    </div>
  </div>
</nav>
  );
};

export default NavBar;
