import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { GET_PRODUCTS, BASE_URL } from "./type"

export const getProducts = createAsyncThunk(
  GET_PRODUCTS,
  async (some, { getState, dispatch, rejectWithValue }) => {
    try {
      const { pageSize, sort } = getState()
      const params = {
        page_size: pageSize,
        sort: sort,
      }
      console.log(params)
      const res = await axios.get(`${BASE_URL}/products/`, {
        params: params,
      })
      return { res }
    } catch (err) {
      console.log(err)
      return rejectWithValue(err?.res)
    }
  }
)
