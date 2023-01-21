import React, { useState } from "react";

export default function Packages() {
  const [filterd, setFilterd] = useState("training");

  const filter = (category) => {
    if (category === "training") {
      setFilterd("training");
    }
    else if(category === "training-diet")
    setFilterd("training-diet");
  };

  return (
    <div className="container py-5">
      {/* ========= Packages ========== */}

      <h2 className="fw-bold text-light text-center mb-5 text-uppercase fs-1">
          Choose your <span style={{ color: `#aa0000` }}>package</span>
        </h2>

      <div className="d-flex justify-content-around w-50 m-auto mb-5">
        <button className="btn-1 fs-5" onClick={() => filter("training")}>Trainng</button>
        <button className="btn-2 fs-5" onClick={() => filter("training-diet")}>Training & Diet</button>
      </div>

      {filterd == "training" && (
        <div className="row gap-4 bg-danger p-3">
          <div className="col bg-light py-3 rounded fs-5 text-center">
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Aglan</p>
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
            <button className="btn-1 my-3">Select</button>
          </div>
          <div className="col bg-light py-3 rounded fs-5 text-center">
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Aglan</p>
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
            <button className="btn-2 my-3">Select</button>
          </div>
          <div className="col bg-light py-3 rounded fs-5 text-center">
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Aglan</p>
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
            <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
            <button className="btn-1 my-3">Select</button>
          </div>
        </div>
      )}

      {filterd == "training-diet" && (
        <div className="row gap-4 bg-success p-3">
        <div className="col bg-light py-3 rounded fs-5 text-center">
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Aglan</p>
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>

          <button className="btn-1 my-3">Select</button>
        </div>
        <div className="col bg-light py-3 rounded fs-5 text-center">
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Aglan</p>
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
          <button className="btn-2 my-3">Select</button>
        </div>
        <div className="col bg-light py-3 rounded fs-5 text-center">
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Aglan</p>
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
          <p className="pb-3" style={{borderBottom: `1px solid #aa0000`}}>Mohamed</p>
          <button className="btn-1 my-3">Select</button>
        </div>
      </div>
      )}
    </div>
  );
}
