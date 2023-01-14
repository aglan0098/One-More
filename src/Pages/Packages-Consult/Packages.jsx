import React from "react";


export default function Packages() {

  const categories = [
    "training", "training-diet"
  ];


  return (
    <div className="container">
      {/* ========= Packages ========== */}

      <div className="d-flex justify-content-around w-50 m-auto my-5">
        <button className="btn btn-success">Trainng</button>
        <button className="btn btn-danger">Training & Diet</button>
      </div>

      <div className="row gap-4 bg-primary">
        <div className="col bg-warning">package fffffff1</div>
        <div className="col bg-warning ">package 2</div>
        <div className="col bg-warning">package 2</div>
      </div>
    </div>
  );
}
