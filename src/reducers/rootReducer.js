import { combineReducers } from "@reduxjs/toolkit"
import { paramsSlice } from "./params"
import { productsSlice } from "./products"

export default combineReducers({
  products: productsSlice.reducer,
  params: paramsSlice.reducer,
})
