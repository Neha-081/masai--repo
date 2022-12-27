import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBrands } from "../redux/actions/brandsActions";
import { addToChart } from "../redux/actions/chartActions";

const ProductDetail = (props) => {
  const dispatch = useDispatch();

  const product = props.location.product;
  let brandName;
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
        <div
          className="small-images"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
        </div>
      </div>
      <div className="phone-content" style={{ marginLeft: "40px" }}>
        <h3>{product.title}</h3>
        <h3 style={{ color: "rgb(253, 188, 68)" }}>
          ${product.price.toFixed(2)}
        </h3>
        <div>
          <p style={{ margin: "0" }}>
            <b>Description</b>
          </p>
          {/* <p style={{ margin: "0" }}>{product.description}</p> */}
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>Brand</b>
          </p>
          <p style={{ margin: "0" }}>{brandName}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>Camera</b>
          </p>
          <p style={{ margin: "0" }}>{product.camera}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>CPU</b>
          </p>
          <p style={{ margin: "0" }}>{product.cpu}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>Memory</b>
          </p>
          <p style={{ margin: "0" }}>{product.memory}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>Display</b>
          </p>
          <p style={{ margin: "0" }}>{product.display}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>Battery</b>
          </p>
          <p style={{ margin: "0" }}>{product.battery}</p>
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
