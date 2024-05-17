// Navbar.js
import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
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
    <Navbar bg="light" expand="lg" sticky="top">
      <div className="container d-flex justify-content-between align-items-center">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-capitalize">{renderNavItems(items)}</Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
