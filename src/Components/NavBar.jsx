import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

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
              <Link smooth spy to="home" className="nav-link px-4 py-3 fs-5">
                Home
              </Link>
              <Link smooth spy to="about" className="nav-link px-4 py-3 fs-5">
                About
              </Link>
              <Link smooth spy to="stories" className="nav-link px-4 py-3 fs-5">
                Stories
              </Link>
              <Link
                smooth
                spy
                to="products-articles"
                className="nav-link px-4 py-3 fs-5"
              >
                Articles
              </Link>
              <Link smooth spy to="packages" className="nav-link px-4 py-3 fs-5">
                Packages
              </Link>
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
