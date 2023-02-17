import React, { useState, useEffect } from "react";
// ----------- Sanity --------------
import { client } from "../../../lib/client";
// ---------- Images -------------
import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";
// ---------- Components ----------
import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";
import ProductCard from "../../Components/ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { modalClose } from "../../redux/cartSlice";
import Modal from "react-bootstrap/Modal";

export default function Products() {
  // ============== connect with sanity ===========
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type == "product"]')
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  // ================= filter =========
  const allcategories = [
    "الكل",
    "مكملات بروتين",
    "فيتامينات ومعادن",
    "احماض امينيه",
    "مكملات طاقه",
    "مكملات كربوهيدرات",
    "حوارق دهون",
    "الماس جينز وزياده الوزن",
    "مكملات كرياتين",
    "محفزات تستسترون",
    // ...new Set(products.map((product, index) => product.category)),
  ];

  const filter = (category) => {
    if (category === "الكل") {
      client
      .fetch('*[_type == "product"]')
      .then((data) => setProducts(data))
      .catch(console.error);
      return;
    }
    setProducts(
      products.filter((product) => product.category === category)
    );
  };

  // ======== Modal Alert ===========
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.cart);
  const handleClose = () => dispatch(modalClose());

  return (
    <>
      <SecondNavbar />
      {/* ---------- Header ------------ */}
      <Header title={"#PRODUCTS"} img={inGYM} />

      {/* =========== Content ========= */}
      <div className="container-fluid d-flex py-5">
        <div className="row py-4">
          <div className="filter-container col-lg-2 gray-dark px-0 text-center">
            {allcategories.map((category, index) => (
              <button
                className="filterBtn d-lg-block btn-2 fw-bold text-capitalize mb-2"
                onClick={() => filter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="col-lg-10">
            <div className="bd-grid">
              {products &&
                products.map((product) => (
                  <ProductCard product={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* =========== Insta Images ========= */}
      <div className="images">
        <h2 className="hack-font-lg fw-bold text-center text-dark">#ONE_MORE</h2>
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

      {/* =========== Modal ============ */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This Item is Already in Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="red">Hope you enjoy Shoping with us</Modal.Body>
        <Modal.Footer>
          <Link to="/cart">
            <button className="btn-1 px-3 rounded" onClick={handleClose}>
              Your Cart
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
