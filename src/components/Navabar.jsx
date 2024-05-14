import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navabar() {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown
              title="Nested Dropdown"
              class="bdropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <NavDropdown.Item href="#action/3.4">
                Sub Action 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Sub Action 2
              </NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navabar;
