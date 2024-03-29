import React, { useState, useEffect } from "react";
import { client } from "../../../lib/client";
import { urlFor } from "../../../lib/client";

import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";
import Header from "../../Components/Header";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const add = () => {
    dispatch(
      addToCart({
        title: "Aglan",
        count: 1,
        price: 10,
        orderPrice: 10,
      })
    );
  };

  // ============== connect with sanity ===========
  const [productss, setProductss] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type == "product"]')
      .then((data) => setProductss(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {/* ---------- Header ------------ */}
      <Header title={"#PRODUCTS"} img={inGYM} />

      {/* =========== Content ========= */}
      <div  className="container-fluid d-flex py-5 bg-success">
        <div  className="row py-5 bg-primary">
          <div  className="col-md-3 bg-danger">Mohamed</div>

          <div  className="col-md-9 bg-warning row gap-3 py-5">
            <div  className="col bg-info text-center">
              <img src={online}  className="w-100" />
              <h4  className="py-2">title</h4>
              <button  className="btn btn-success" onClick={() => add()}>
                Add
              </button>
            </div>

            <div  className="col bg-info text-center">
              <img src={online}  className="w-100" />
              <h4  className="py-2">title</h4>
            </div>

            <div  className="col bg-info text-center">
              <img src={online}  className="w-100" />
              <h4  className="py-2">title</h4>
            </div>
            <div  className="col bg-info text-center">
              <img src={online}  className="w-100" />
              <h4  className="py-2">title</h4>
            </div>
          </div>
        </div>
      </div>

      {/* =========== Insta Images ========= */}
      <div  className="images">
        <h2  className="fs-1 fw-bold text-center text-dark">#ONE_MORE</h2>
        <div  className="container m-auto gap-3 row py-4 px-0">
          <div  className="col-md px-0" style={{ overflow: `hidden` }}>
            <img src={online}  className="h-100 insta-img" />
          </div>

          <div  className="col-md px-0">
            <div  className="mb-3 bg-primary" style={{ overflow: `hidden` }}>
              <img src={inGYM}  className="w-100 insta-img" />
            </div>
            <div style={{ overflow: `hidden` }}>
              <img src={online}  className="w-100 insta-img" />
            </div>
          </div>
        </div>
      </div>
    
      {/* ============= Sanity ============== */}
      {productss &&
        productss.map((product) => (
          <>
            <h2>Moahmed Aglan</h2>
            <p>{product.name}</p>
            <p>{product.details}</p>
            <img src={urlFor(product.image[0])} />
          </>
        ))}
    </>
  );
}
