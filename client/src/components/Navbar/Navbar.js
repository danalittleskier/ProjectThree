import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import { Link } from 'react-router-dom';
import './style.css';

function Nav() {
  return (
    <Navbar
      className="indigo"
      brand={<li className="brand-logo app-title center">SKIIMATIK</li>}
      centerLogo
      alignLinks="left"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >

      <NavItem href="/">Home</NavItem>
      <NavItem href="/login">Login</NavItem>
      <NavItem href="/signup">Signup</NavItem>
      <NavItem href="/skis">Skis</NavItem>


      {/* <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/skis">Skis</Link> */}

    </Navbar>

  );
}

export default Nav;
