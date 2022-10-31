import { createSlice } from "@reduxjs/toolkit"

export const paramsSlice = createSlice({
  name: "params",
  initialState: {
    sort: "-date_added",
    pageSize: 4,
    sizes: [3, 8],
    slug: "all",
  },
  reducers: {
    updateSort: (state, action) => {
      state.sort = action?.payload
    },
    updatePriceRange: (state, action) => {
      state.priceFrom = action?.payload.fromPrice
      state.priceTo = action?.payload.toPrice
    },
    updateSlug: (state, action) => {
      state.slug = action.payload
    },
  },
})

export const { updateCategory, updateSort, updatePriceRange, updateSlug } =
  paramsSlice.actions
