import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../actions/products"

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    sort: "-date_added",
    pageSize: 4,
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      console.log(action.payload.res.data)
      state.products = action?.payload.res.data.results
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})
