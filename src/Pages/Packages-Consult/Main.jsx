import React from "react";
import { Link, Outlet } from "react-router-dom";

import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";

import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";
import Split from "../../Components/Split";

export default function About() {
  return (
    <>
      <SecondNavbar />
      {/* ---------- Header ------------ */}
      <Header title={"#TRAINg"} img={inGYM} />

      {/* =============== Switch =============== */}
      <div className="container-fluid">
        <div className="text-center py-5">
          <h2 className="fw-bold mb-5">Online <span className="red">Packages</span> and <span className="red">Consultation</span></h2>
          <p className="lead fs-3 col-10 m-auto my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem debitis tempore unde veritatis, dignissimos hic
            voluptates pariatur eaque aperiam repellendus.
          </p>
        </div>
        <Split
          leftTitle={"Packages"}
          leftImg={inGYM}
          leftLink={"packages"}
          leftIcon={"desktop"}
          rightTitle={"Consult the Coach"}
          rightImg={online}
          rightLink={"consultation"}
          rightIcon={"support"}
        />
      </div>

      {/* ================ Content ============ */}
      <div className="bg-dark">
        <Outlet />
      </div>
    </>
  );
}
