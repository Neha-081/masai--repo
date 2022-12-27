import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBrands } from "../redux/actions/brandsActions";
import { addToChart } from "../redux/actions/chartActions";

const ProductDetail = (props) => {
  const dispatch = useDispatch();

  const product = props.location.product;
  useEffect(() => {
    dispatch(getBrands);
    // eslint-disable-next-line
  }, []);
  return (
    <div
      className="container"
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="images">
        <div className="big-image">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="phone-content" style={{ marginLeft: "40px" }}>
        <h3>{product.title}</h3>
        <h3 style={{ color: "rgb(253, 188, 68)" }}>
          ${product.price.toFixed(2)}
        </h3>
        <div>
          <p style={{ margin: "0" }}>
            <b>Brand</b>
          </p>
          <p style={{ margin: "0" }}>{product.brand}</p>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            className="btn btn-outline-primary"
            onClick={() => dispatch((dispatch) => addToChart(dispatch, product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
