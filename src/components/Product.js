import React, { useState } from "react";
import { addToChart } from "../redux/actions/chartActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="col mt-5">
      <div
        className="card p-2"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Link to={{ pathname: `/product-detail/${product.id}`, product: product }}>
          <img src={product.image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <Link
            to={{ pathname: `/product-detail/${product.id}`, product: product }}
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "red"
            }}
          >
            {product.title}
          </Link>
          <h4>${product.price.toFixed(2)}</h4>
          <p
            className="card-text"
            style={{ fontSize: "0.7rem", marginBottom: "3rem" }}
          >
            {product.brand}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn btn-primary "
              onClick={() =>
                dispatch((dispatch) => addToChart(dispatch, product))
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
