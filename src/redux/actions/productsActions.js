import {
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
} from "./actionTypes";
import { productsURL } from "../urls";
import axios from "axios";

export const getProducts = (dispatch) => {
  dispatch({ type: PRODUCTS_FETCH_START });
  axios
    .get(productsURL)
    .then((res) => dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: PRODUCTS_FETCH_FAIL, payload: err }));
};
