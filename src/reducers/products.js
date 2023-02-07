import { createSlice } from "@reduxjs/toolkit"
import {
  getNewPage,
  getProduct,
  getProducts,
  getSearchedProducts,
} from "../actions/products"

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    panelStatus: false,
    loading: true,
    selectedDesc: "desc",
    //selectedSize: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.results
      state.numProducts = action.payload.count
      state.prevPage = action.payload.previous
      state.nextPage = action.payload.next
      state.loading = false
    },
    setProduct: (state, action) => {
      state.product = action.payload
    },
    updateSearch: (state, action) => {
      state.search = action.payload
    },
    updateSize: (state, action) => {
      state.selectedSize = action.payload
    },
    updatePanel: (state) => {
      state.panelStatus = !state.panelStatus
    },
    clearSProducts: (state) => {
      state.sProducts = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.res.data.results
      state.numProducts = action.payload.res.data.count
      state.prevPage = action.payload.res.data.previous
      state.nextPage = action.payload.res.data.next
      state.loading = false
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      console.log(action)
      state.error = action.payload
      state.loading = false
    })
    // new page
    builder.addCase(getNewPage.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getNewPage.fulfilled, (state, action) => {
      state.products = action.payload.res.data.results
      state.numProducts = action.payload.res.data.count
      state.prevPage = action.payload.res.data.previous
      state.nextPage = action.payload.res.data.next
      state.loading = false
    })
    builder.addCase(getNewPage.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
    //search
    builder.addCase(getSearchedProducts.pending, (state) => {
      state.sLoading = true
    })
    builder.addCase(getSearchedProducts.fulfilled, (state, action) => {
      state.sProducts = action.payload.res.data.results
      state.sNumProducts = action.payload.res.data.count
      state.sPrevPage = action.payload.res.data.previous
      state.sNextPage = action.payload.res.data.next
      state.sLoading = false
    })
    builder.addCase(getSearchedProducts.rejected, (state, action) => {
      console.log(action)
      state.sError = action.payload
      state.sLoading = false
    })
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action?.payload.res.data
      state.loading = false
    })
    builder.addCase(getProduct.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
  },
})

export const {
  updatePanel,
  updateSize,
  setProducts,
  setProduct,
  updateSearch,
  clearSProducts,
} = productsSlice.actions
