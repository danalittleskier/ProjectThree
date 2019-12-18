import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import { useAuth0 } from "../../react-auth0-spa";
import './style.css';
import logo from './nav-logo.PNG'




function Nav() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar
      className="blue-grey darken-3"
      brand={<a className="valign-wrapper brand-logo app-title right" href="/"><img src={logo} style={{"height": "3rem", "padding-top":"1rem"}} alt="skiimatic"/></a>}
      fixed
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
