import Axios from 'axios';
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Product from "./Product";

const ProductList = () => {
  const priceFilter = useSelector((state) => state.priceFilter);
  const columnCount = 3;
  const [productsData, setProductsData] = useState([]);

  const layoutClassName = `row row-cols-${columnCount}`;
  if (priceFilter.priceFilter === "low") {
    productsData.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (priceFilter.priceFilter === "high") {
    productsData.sort((a, b) => (b.price > a.price ? 1 : -1));
  }

  async function getProductsInfo() {
    const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`;
    try {
      const { data } = await Axios.get(url);
      console.log(data.data);
      setProductsData(data.data);
      // setLoading(false);
      return data;
    } catch (e) {
      console.error('getProductsInfo error\n', e);
    }
  };

  useEffect(() => {
    getProductsInfo()
  }, []);
  return (
    <div style={{ width: "75%" }}>
      <div>
        <div className={layoutClassName}>
              {productsData.map((product) => (
                <Product product={product} />
              )
              )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
