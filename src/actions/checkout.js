import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "./type"

export const placeOrder = createAsyncThunk(
  "PLACE_ORDER",
  async (
    { charge_id, pay_choice },
    { getState, dispatch, rejectWithValue },
  ) => {
    try {
      const { cart } = getState().cart
      const { deliveryA, billingA } = getState().checkout
      const params = {
        delivery_address: deliveryA,
        order_items: cart,
        charge_id: charge_id,
        payment_choice: pay_choice,
      }
      if (deliveryA.sameAs) params.sameAs = deliveryA.sameAs
      else {
        params.billing_address = billingA
        params.sameAs = deliveryA.sameAs
      }
      const res = await axios.post(`${BASE_URL}/orders/`, { params: params })
      return { res }
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)

export const getOrderDetails = createAsyncThunk(
  "ORDER_DETAILS",
  async (order_ref, { getState, rejectWithValue }) => {
    try {
      let params = { order_ref }
      const res = await axios.get(`${BASE_URL}/orders/`, { params })
      return { res }
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)
