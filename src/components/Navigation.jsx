import "./Navigation.css";

import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <Navbar expand="md" className="navbarContainer ">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto d-flex justify-content-evenly">
        <NavLink to="/" className="navbarLink">
          home
        </NavLink>
        <NavLink to="category/energy" className="navbarLink">
          energy
        </NavLink>
        <NavLink to="category/environment" className="navbarLink">
          environment
        </NavLink>
        <NavLink to="category/gender" className="navbarLink">
          gender
        </NavLink>
        <NavLink to="Authors" className="navbarLink">
          authors
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
