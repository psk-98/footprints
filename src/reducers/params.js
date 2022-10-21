import { createSlice } from "@reduxjs/toolkit"

export const paramsSlice = createSlice({
  name: "params",
  initialState: {
    sort: "-date_added",
    pageSize: 4,
  },
  reducers: {
    updateCategory: (state, action) => {
      state.category = action?.payload
    },
    updateSort: (state, action) => {
      state.sort = action?.payload
    },
    updatePriceRange: (state, action) => {
      state.priceFrom = action?.payload.fromPrice
      state.priceTo = action?.payload.toPrice
    },
  },
})

export const { updateCategory, updateSort, updatePriceRange } =
  paramsSlice.actions
