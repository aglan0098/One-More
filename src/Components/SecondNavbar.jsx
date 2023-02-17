import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function DefaultNavbar() {
  const { cartNum } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar variant="dark" expand="lg" id="navbar">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            Coach <span className="red fw-bold">ELAM</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link px-4 py-3 fs-5">
                Home
              </NavLink>
              <NavLink to="/products" className="nav-link px-4 py-3 fs-5">
                Products
              </NavLink>
              <NavLink to="/articles" className="nav-link px-4 py-3 fs-5">
                Articles
              </NavLink>
              <NavLink to="/ingym" className="nav-link px-4 py-3 fs-5">
                inGYM
              </NavLink>
              <NavLink
                to="/packages&consultaion/packages"
                className="nav-link px-4 py-3 fs-5"
              >
                Online
              </NavLink>
              <NavLink to="/cart" className="nav-link px-4 py-3 fs-5">
                <i className="bx bx-cart bx-sm position-relative px-1">
                  <span
                    className="bg-danger text-light rounded-circle position-absolute start-100 translate-middle badge"
                    id="cartNum"
                  >
                    {cartNum}
                  </span>
                </i>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
