import Axios from 'axios';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from '../redux/actions/productsActions';

import Product from "./Product";

const ProductList = () => {
  const productsState = useSelector((state) => state.products);
  const filteredBrands = useSelector((state) => state.filteredBrands);
  const priceFilter = useSelector((state) => state.priceFilter);
  const dispatch = useDispatch();
  const [columnCount, setColumnCount] = useState(3);
  const [productsData, setProductsData] = useState([]);

  const layoutClassName = `row row-cols-${columnCount}`;
  let products;
  if (filteredBrands.filteredBrands.length > 0) {
    products = productsState.products.filter((product) => {
      if (filteredBrands.filteredBrands.includes(product.brandId.toString())) {
        return true;
      }
    });
  } else {
    // products = productsState.products;
  }
  if (priceFilter.priceFilter == "low") {
    productsData.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (priceFilter.priceFilter == "high") {
    productsData.sort((a, b) => (b.price > a.price ? 1 : -1));
  }
  const color = { color: "#1E90FF" };
  useEffect(() => {
    dispatch(getProducts);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  // const pageCount = Math.ceil(products.length / productsPerPage);
  const pageCount = 1;

  //I must do something like splice

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
  }, [])
  console.log(productsData,"productsData");


  console.log(currentPage);
  let pageNumberArray = [];
  for (let i = 0; i < pageCount; i++) {
    pageNumberArray[i] = (
      <li className={currentPage == i + 1 ? "page-item active" : "page-item"}>
        <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
          {i + 1}
        </button>
      </li>
    );
  }
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
      <nav aria-label="Page navigation example" style={{ marginTop: "50px" }}>
        <ul className="pagination justify-content-end">
          <li
            className={currentPage == 1 ? "page-item disabled" : "page-item "}
          >
            <button
              className="page-link"
              tabIndex="-1"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {pageNumberArray.map((li) => li)}
          <li
            className={
              currentPage == pageCount ? "page-item disabled" : "page-item "
            }
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductList;
