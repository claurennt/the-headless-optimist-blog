import "./Navigation.css";

import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <Navbar className="navbarContainer">
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
  </Navbar>
);

export default Navigation;
