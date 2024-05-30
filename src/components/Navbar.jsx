import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { items } from "../components/NavData";
import "../Navbar.css";

const renderNavItems = (items) => {
  return items.map((item) => {
    if (item.children) {
      return (
        <NavDropdown
          key={item.key}
          title={item.label}
          id={`${item.key}-dropdown`}
        >
          {renderNavItems(item.children)}
        </NavDropdown>
      );
    }
    return (
      <Nav.Link key={item.key} href={item.path}>
        {item.label}
      </Nav.Link>
    );
  });
};

const CustomNavbar = () => {
  return (
    <Navbar bg="lime-800" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">CHAPAIBAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-capitalize">{renderNavItems(items)}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
