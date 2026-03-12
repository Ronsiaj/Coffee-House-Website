import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Container
} from "reactstrap";

import logo from "../Assets/images/coffee-logo.png";

const CafeNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="cafe-navbar" expand="md" fixed="top">
      <Container className="nav-wrapper">

        {/* LEFT SIDE LOGO */}
        <NavbarBrand href="/">
          <img src={logo} alt="logo" className="logo-img"/>
        </NavbarBrand>

        {/* RIGHT SIDE HAMBURGER */}
        <NavbarToggler onClick={toggle} className="ms-auto"/>

      </Container>

      {/* COLLAPSE MENU BELOW */}
      <Collapse isOpen={isOpen} navbar className="mobile-menu">
        <Nav navbar className="mx-auto">

          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#features">Features</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#choose">Why Us</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#visit">Visit</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#testimonial">Testimonials</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#footer">Contact</NavLink>
          </NavItem>

        </Nav>
      </Collapse>

    </Navbar>
  );
};

export default CafeNavbar;