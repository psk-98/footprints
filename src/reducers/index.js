import { combineReducers } from "redux";
import products from './products'
import cart from "./cart";
import errors from "./errors";

export default combineReducers({
    products,
    cart,
    errors
})