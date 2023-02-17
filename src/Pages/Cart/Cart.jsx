import React, { useState } from "react";
import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";
import inGYM from "../../assets/images/inGYM.jpeg";
import empty from "../../assets/images/emptyCart.jpg";

import { urlFor } from "../../../lib/client";
import ReactWhatsapp from "react-whatsapp";

// ========= Redux =========
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseAmount,
  decreaseAmount,
  removeFromCart,
} from "../../redux/cartSlice";

export default function Cart() {
  const { selectedItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increase = (title) => {
    dispatch(increaseAmount(title));
  };

  const decrease = (title) => {
    dispatch(decreaseAmount(title));
  };

  const remove = (title) => {
    dispatch(removeFromCart(title));
  };

  // ======== Handle Form Data ============
  const [clientData, setClientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  return (
    <>
      <SecondNavbar />
      <Header title={"#Your Cart"} img={inGYM} />

      {(selectedItems.length && (
        <div className="container-fluid py-5 bg-dark">
          <h2 className="text-center text-light fw-bold mb-5">
            Just One Step Left to Complete Your{" "}
            <span className="text-danger">Order</span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="text-center fw-bold my-4 text-light">
                Your Order
              </h3>
              {selectedItems.map((item) => (
                <div
                  className="d-flex mb-3 rounded"
                  style={{ backgroundColor: `#ddd` }}
                >
                  <div className="col-5">
                    {item.img && (
                      <img src={urlFor(item.img[0])} className="w-100 h-100" />
                    )}
                  </div>
                  <div className="col-7 p-2 position-relative">
                    <p className="fs-5">
                      Product: <span className="red fw-bold">{item.title}</span>
                    </p>
                    <p className="fs-5">
                      Price: <span className="fw-bold">{item.price}</span>
                    </p>
                    <div className="fs-5">
                      Count:{" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => decrease(item)}
                      >
                        <i className="bx bx-minus" />
                      </button>{" "}
                      <span className="mx-4 fs-4">{item.count}</span>
                      <button
                        className="btn btn-success"
                        onClick={() => increase(item)}
                      >
                        <i className="bx bx-plus" />
                      </button>
                    </div>
                    <p className="fs-5 mt-2">
                      Total Price:{" "}
                      <span className="red fw-bold">{item.orderPrice}</span>
                    </p>

                    <button
                      className="btn btn-danger position-absolute"
                      style={{ right: `5px`, bottom: `5px` }}
                      onClick={() => remove(item)}
                    >
                      <i class="bx bxs-trash-alt" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <h3 className="text-center fw-bold my-4 text-light">Your Info</h3>
              <form
                // action={FORM_ENDPOINT}
                method="POST"
                target="_blank"
                className="py-3 px-4 container bg-light rounded"
              >
                <div className="my-2 row">
                  <div className="col-6">
                    <label htmlFor="firstName">
                      FIRST NAME: <span className="text-danger fs-5">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="firstName"
                      className="col-12 px-3 py-2"
                      required
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="lastName">
                      LAST NAME: <span className="text-danger fs-5">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="lastName"
                      className="col-12 px-3 py-2"
                      required
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                </div>

                <div className="my-2 row">
                  <div className="col-6">
                    <label htmlFor="Email">
                      EMAIL ADDRESS: <span className="text-danger fs-5">*</span>
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      className="col-12 px-3 py-2"
                      required
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="phone">
                      PHONE NUMBER: <span className="text-danger fs-5">*</span>
                    </label>
                    <br />
                    <input
                      type="tel"
                      // pattern="(010 | 011 | 012 | 015){1}[0-9]{8}"
                      // pattern="[+]{1}[0-9]{11,14}"
                      name="phone"
                      className="col-12 px-3 py-2"
                      required
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                </div>

                <div className="my-2 row">
                  <div className="col-12">
                    <label htmlFor="subject">SUBJECT:</label>
                    <br />
                    <input
                      type="text"
                      name="subject"
                      className="col-12 px-3 py-2"
                    />
                  </div>
                </div>

                <div className="my-3 row">
                  <div className="col-12">
                    <label htmlFor="subject">DESCRIPTION:</label>
                    <br />
                    <textarea
                      placeholder="Your message"
                      name="message"
                      className="px-3 py-3 col-12"
                    />
                  </div>
                </div>

                <div className="my-4">
                  <button
                    className="btn-1 rounded fs-5 px-4"
                    type="submit"
                    formAction=""
                  >
                    <ReactWhatsapp
                      number="+201144426901"
                      message={`Hello World!!! ${
                        selectedItems.map(element => {
                          return element.count;
                        })
                      }======${JSON.stringify(clientData)}`}
                    >
                      Order
                    </ReactWhatsapp>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )) || (
        <div className="fs-3 rounded bg-light col-8 m-auto py-3 my-4 text-center">
          <p className="fw-bold mb-4 py-1 text-uppercase">Your Cart is Empty</p>
          <Link to="/products">
            <button className="btn-1 mb-5">Back To Products</button>
            <br />
          </Link>
          <img src={empty} className="col-4" />
        </div>
      )}
    </>
  );
}
