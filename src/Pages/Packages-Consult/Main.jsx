import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";

export default function About() {
  return (
    <>
      {/* =============== Switch =============== */}
      <div className="container-fluid" style={{ height: `70vh` }}>
        <div className="row h-100">
          <div
            className="col-md-6 d-flex justify-content-center align-items-center position-relative py-5"
            style={{
              background: `url(${inGYM}) no-repeat center center/cover`,
              borderRight: `5px solid #fff`,
            }}
          >
            <div className="overlay"></div>
            <div
              className="text-dark w-75 py-5 text-center"
              style={{ background: `rgba(255, 255, 255, .7)`, zIndex: `2` }}
            >
              <NavLink to="packages" style={{ textDecoration: "none" }}>
                <button className="btn-1 fw-bold fs-5">Packages</button>
              </NavLink>
            </div>
          </div>

          <div
            className="col-md-6 d-flex justify-content-center align-items-center position-relative py-5"
            style={{
              background: `url(${online}) no-repeat center center/cover`,
              borderLeft: `5px solid #fff`,
            }}
          >
            <div className="overlay"></div>
            <div
              className="text-dark w-75 py-5 text-center"
              style={{ background: `rgba(255, 255, 255, .7)`, zIndex: `2` }}
            >
              <NavLink to="consultation" style={{ textDecoration: "none" }}>
                <button className="btn-2 fw-bold fs-5">Consult the Coach</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* ================ Content ============ */}
      <div className="my-5">
        <Outlet />
      </div>
    </>
  );
}
