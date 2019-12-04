import React from "react";
import { Navbar } from "react-materialize";
import { Link } from 'react-router-dom';
import './style.css'

function Nav() {
  return (
    <Navbar
      brand={<li className="brand-logo app-title center">SKIIMATIK</li>}
      centerLogo
      alignLinks="left"
    >
      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/signup">Signup</Link>

      <Link to="/skis">Skis</Link>
    </Navbar>
  );
}

export default Nav;
