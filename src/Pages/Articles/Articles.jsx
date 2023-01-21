import React from "react";
import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";

export default function Articles() {
  return (
    <>
      {/* ---------- Header ------------ */}
      <div
        className="bg-primary d-flex align-items-center justify-content-center position-relative"
        style={{
          background: `url(${inGYM}) no-repeat center center/cover`,
          height: `95vh`,
        }}
      >
        <div className="overlay"></div>
        <h1
          className="text-uppercase text-center text-light fw-bold fs-1 position-relative"
          style={{ zIndex: `2` }}
        >
          #READ
        </h1>
      </div>

      {/* =========== Content ========= */}
      <div className="container-fluid d-flex py-5 bg-success">
        <div className="row py-5 bg-primary">
          <div className="col-md-3 bg-danger">Mohamed</div>

          <div className="col-md-9 bg-warning row gap-3 py-5">
            <div className="col bg-info text-center">
              <img src={online} className="w-100" />
              <h4 className="py-2">title</h4>
            </div>

            <div className="col bg-info text-center">
              <img src={online} className="w-100" />
              <h4 className="py-2">title</h4>
            </div>

            <div className="col bg-info text-center">
              <img src={online} className="w-100" />
              <h4 className="py-2">title</h4>
            </div>
            <div className="col bg-info text-center">
              <img src={online} className="w-100" />
              <h4 className="py-2">title</h4>
            </div>
          </div>
        </div>
      </div>

      {/* =========== Insta Images ========= */}
      <div className="images">
        <h2 className="fs-1 fw-bold text-center text-dark">#ONE_MORE</h2>
        <div className="container m-auto gap-3 row py-4 px-0">
          <div className="col-md px-0" style={{ overflow: `hidden` }}>
            <img src={online} className="h-100 insta-img" />
          </div>

          <div className="col-md px-0">
            <div className="mb-3 bg-primary" style={{ overflow: `hidden` }}>
              <img src={inGYM} className="w-100 insta-img" />
            </div>
            <div style={{ overflow: `hidden` }}>
              <img src={online} className="w-100 insta-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
