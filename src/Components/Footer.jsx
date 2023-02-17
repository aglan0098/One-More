import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <>
      <div className="text-light">
        <div className="py-4 px-5 bg-red">
          <div className="row">
            <div className="col-4">
              <h4 className="fw-bold mb-4">coach Eslam</h4>
              <img src={logo} alt="logo" className="ps-0 w-50" />
            </div>
            <div className="col-4">
              <h4 className="fw-bold">Quick links</h4>
              <ul className="ps-0">
                <li>
                  <Link to="/products">products</Link>
                </li>
                <li className="my-2">
                  <Link to="/products">Articles</Link>
                </li>
                <li>
                  <Link to="/products">Packages</Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h4 className="fw-bold">Contact us</h4>
              <div className="icons d-flex mt-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100089778207014"
                  target="_blank"
                >
                  <i class="bx bxl-facebook-circle fs-1"></i>
                </a>
                <a
                  className="mx-3"
                  href="https://www.instagram.com/coacheslam44/?igshid=ZDdkNTZiNTM="
                  target="_blank"
                >
                  <i class="bx bxl-instagram fs-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark py-3 text-center">
          <p className="fs-5 mb-0">Created By TripleM &copy; 2023</p>
        </div>
      </div>
    </>
  );
}
