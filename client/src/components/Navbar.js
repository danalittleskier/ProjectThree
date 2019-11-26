import React from "react";
import { Navbar } from "react-materialize";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <Navbar
      brand={<li className="brand-logo center">Logo</li>}
      centerLogo
      alignLinks="left"
    >
      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/signup">Signup</Link>

      <Link to="/api/ski">Skis</Link>
    </Navbar>
  );
}

export default Nav;
