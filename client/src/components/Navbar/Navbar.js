import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import { Link } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-spa";
import './style.css';

function Nav() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
      <NavItem href="/signup">Signup</NavItem>
      <NavItem href="/skis">Skis</NavItem>

      {!isAuthenticated && (
        <NavItem onClick={() => loginWithRedirect({})}>Log in</NavItem>
      )}
      {isAuthenticated && <NavItem onClick={() => logout()}>Log out</NavItem>}
      {isAuthenticated && <NavItem href="/profile">Profile</NavItem>}


    </Navbar>

  );
}

export default Nav;
