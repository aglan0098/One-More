import React from "react";
import SecondNavbar from "../../Components/SecondNavbar";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, modalClose } from "../../redux/cartSlice";
import Modal from "react-bootstrap/Modal";

import { urlFor } from "../../../lib/client";

export default function ProductDetails() {
  const { state } = useLocation();

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToCart(state));
  };

  // ======== Modal Alert ===========
  const { showModal } = useSelector((state) => state.cart);
  const handleClose = () => dispatch(modalClose());

  return (
    <>
      <SecondNavbar />
      <div className="container-fluid py-5">
        <h2 className="text-center pt-5 fw-bold">Product Details</h2>
        <div className="row py-5 px-4">
          <div className="col-sm-6 d-flex justify-content-center">
            <img src={urlFor(state.image[0])} className="col-10" />
          </div>
          <div className="col-sm-6 rounded gray pt-5 px-4">
            <h4>{state.name}</h4>
            <p className="my-4">{state.details}</p>
            <p className="my-4 fw-bold">$ {state.price}</p>
            <hr className="col-6" />
            <button
              className="btn-1 my-3 mx-4 mx-sm-4 mx-lg-4"
              onClick={() => add()}
            >
              Add To Cart
            </button>
            <Link to="/products">
              <button className="btn-2">Back To Shoping</button>
            </Link>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This Item is Already in Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="red">
          Hope you enjoy Shoping with us
        </Modal.Body>
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
