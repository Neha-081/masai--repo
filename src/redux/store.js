import { productsReducer } from "./reducers/productsReducer";
import { brandsReducer } from "./reducers/brandsReducer";
import { chartReducer } from "./reducers/chartReducer";
import { brandFilterReducer } from "./reducers/brandFilterReducer";
import { priceFilterReducer } from "./reducers/priceFilterReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  productss: productsReducer,
  brands: brandsReducer,
  chart: chartReducer,
  filteredBrands: brandFilterReducer,
  priceFilter: priceFilterReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
