import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

import { urlFor } from "../../lib/client";

export default function ProductCard(props) {
  const { product } = props;
  const { image, name, price } = product;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <div
        className="rounded position-relative productCard gray"
      >
        <div className="h-50">
          <img src={urlFor(image[0])} className="w-100 h-100" />
        </div>
        <div className="px-2" style={{ borderTop: `4px solid #aa0000` }}>
          <h4 className="fw-bold my-2">{name}</h4>
          <p className="my-2 fw-bold fs-5">$ {price}</p>
          <button className="btn cartBtn fs-5" onClick={() => add()}>
            <i class="bx bxs-cart"></i>
          </button>

          <Link to={`/products/${name}`} state={product}>
            <button className="btn detailsBtn fs-5">
              <i class="bx bx-info-circle"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
