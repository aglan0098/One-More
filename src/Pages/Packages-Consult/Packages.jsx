import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export default function Packages() {
  const [filterd, setFilterd] = useState("training");

  const [selectedPackage, setSelectedPackage] = useState({
    name: "",
    price: 0,
    features: [],
  });

  const updateSelected = (name, price) => {
    setSelectedPackage({ ...selectedPackage, name, price });
  };

  // =========== add package to cart ========
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToCart(selectedPackage));
  };

  // ============ Additional =============
  const additionalFeatures = [
    {
      fName: "feature 1",
      fprice: 10,
    },
    {
      fName: "feature 2",
      fprice: 20,
    },
    {
      fName: "feature 3",
      fprice: 30,
    },
  ];

  const addFeature = (e) => {
    let price = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedPackage({
        ...selectedPackage,
        features: [...selectedPackage.features, parseInt(e.target.value)],
      });
    } else {
      let newFeatures = selectedPackage.features.filter(
        (element) => element !== price
      );
      setSelectedPackage({ ...selectedPackage, features: newFeatures });
    }
  };

  const filter = (category) => {
    if (category === "training") {
      setFilterd("training");
    } else if (category === "training-diet") setFilterd("training-diet");
  };

  return (
    <div className="container py-5">
      {/* ========= Packages ========== */}

      <h2 className="fw-bold text-light text-center mb-5 text-uppercase fs-1">
        Choose your <span style={{ color: `#aa0000` }}>package</span>
      </h2>

      <div className="d-flex justify-content-around w-50 m-auto mb-5">
        <button className="btn-1 fs-5" onClick={() => filter("training")}>
          Trainng
        </button>
        <button className="btn-2 fs-5" onClick={() => filter("training-diet")}>
          Training & Diet
        </button>
      </div>

      <div className="row">
        {filterd == "training" && (
          <div className="row gap-4 p-3 m-auto">
            <div className="col-md bg-light py-3 rounded fs-5 text-center">
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Aglan
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <button
                className="btn-1 my-3"
                onClick={() => updateSelected("package1", 20)}
              >
                Select
              </button>
            </div>
            <div className="col-md bg-light py-3 rounded fs-5 text-center">
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Aglan
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <button
                className="btn-2 my-3"
                onClick={() => updateSelected("package2", 50)}
              >
                Select
              </button>
            </div>
            <div className="col-md bg-light py-3 rounded fs-5 text-center">
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Aglan
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <button
                className="btn-1 my-3"
                onClick={() => updateSelected("package3", 100)}
              >
                Select
              </button>
            </div>
          </div>
        )}

        {filterd == "training-diet" && (
          <div className="row gap-4 p-3 m-auto bg-success">
            <div className="col-md bg-light py-3 rounded fs-5 text-center">
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Aglan
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>

              <button
                className="btn-1 my-3"
                onClick={() => updateSelected("package3", 30)}
              >
                Select
              </button>
            </div>
            <div className="col-md bg-light py-3 rounded fs-5 text-center">
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Aglan
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <button
                className="btn-2 my-3"
                onClick={() => updateSelected("package4", 40)}
              >
                Select
              </button>
            </div>
            <div className="col-md bg-light py-3 rounded fs-5 text-center">
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Aglan
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
                Mohamed
              </p>
              <button
                className="btn-1 my-3"
                onClick={() => updateSelected("package5", 50)}
              >
                Select
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ========== Total Cost ============== */}
      <div className="container bg-light text-dark p-4 mt-5">
        <h2 className="text-center text-uppercase fw-bold mb-4">
          Selected <span className="red">Package</span>
        </h2>
        <div className="row pt-3">
          <div className="col-6">
            <h4 className="fs-3 fw-bold mb-3">
              Package: <span className="red">{selectedPackage.name}</span>
            </h4>
            <h4 className="fs-3 fw-bold">
              Total Cost:{" "}
              <span className="red">
                {parseInt(selectedPackage.price) +
                  parseInt(
                    selectedPackage.features.reduce((acc, features) => {
                      return acc + features;
                    }, 0)
                  )}
              </span>
            </h4>

            <button
              className="btn-1 mt-4 fw-bold"
              onClick={add}
            >
              add to Cart
            </button>
          </div>
          {/* =============== Additional Features ======= */}
          <div className="col-6 text-dark text-center">
            <h4 className="fw-bold fs-4 mb-3">Additional Features</h4>
            {additionalFeatures.map((element) => (
              <>
                <input
                  type={"checkbox"}
                  name={element.fName}
                  value={element.fprice}
                  onClick={(e) => addFeature(e)}
                />
                <label className="fs-5 mx-3">{element.fName}</label>
                <br />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
