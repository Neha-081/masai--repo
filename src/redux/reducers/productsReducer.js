import {
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  start: false,
  success: false,
  err: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_START:
      return {
        ...state,
        start: true,
      };
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        start: false,
        success: true,
        products: action.payload,
      };
    case PRODUCTS_FETCH_FAIL:
      return {
        ...state,
        start: false,
        success: false,
        err: action.payload,
      };
    default:
      return state;
  }
};
