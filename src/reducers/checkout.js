import { createSlice } from "@reduxjs/toolkit"
import { getOrderDetails, placeOrder } from "../actions/checkout"

export const checkoutSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    updateAddress: (state, action) => {
      state.deliveryA = action.payload
    },
    updateBilling: (state, action) => {
      state.billingA = action.payload
    },
    updateRedirect: (state, action) => {
      state.redirect = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(placeOrder.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.orderSucess = true
      state.loading = false
    })
    builder.addCase(placeOrder.rejected, (state, action) => {
      state.orderSucess = false
      state.loading = false
    })
    builder.addCase(getOrderDetails.fulfilled, (state, action) => {
      state.orderDetails = action.payload
    })
  },
})

export const { updateAddress, updateBilling } = checkoutSlice.actions
