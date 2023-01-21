import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function DefaultNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Coach <span className="text-danger fw-bold">ELAM</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/home"
                className="nav-link pe-5 py-0"
              >
                Home
              </NavLink>
              <NavLink
                to="/packages&consultaion"
                className="nav-link pe-5 py-0"
              >
                Packages
              </NavLink>
              <NavLink
                to="/articles"
                className="nav-link pe-5 py-0"
              >
                Articles
              </NavLink>
              <NavLink
                to="/products"
                className="nav-link pe-5 py-0"
              >
                Products
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
