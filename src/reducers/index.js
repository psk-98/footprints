import { combineReducers } from "redux";
import products from './products'
import cart from "./cart";
import errors from "./errors";
import accounts from "./accounts";
import params from './params'
import checkout from "./checkout";

export default combineReducers({
    products,
    cart,
    errors,
    accounts,
    params,
    checkout,
})