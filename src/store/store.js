"use client"

import { cartSlice } from "@/reducers/cart"
import { checkoutSlice } from "@/reducers/checkout"
import { configureStore } from "@reduxjs/toolkit"

export const store = () => {
  return configureStore({
    reducer: { cart: cartSlice.reducer, checkout: checkoutSlice.reducer },
  })
}
