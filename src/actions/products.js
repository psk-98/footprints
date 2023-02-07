import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
//import { normalizeCat } from "../components/products/helpers"
import { GET_PRODUCTS, BASE_URL, GET_NEW_PAGE, GET_PRODUCT } from "./type"

export const getProducts = createAsyncThunk(
  GET_PRODUCTS,
  async (something, { getState, rejectWithValue }) => {
    try {
      const { pageSize, sort, priceFrom, priceTo, slug } = getState().params
      let params = { page_size: pageSize, sort: sort }
      if (something === true) params.search = getState().products?.search
      else if (slug === "men" || slug === "women" || slug === "kids")
        params.category = slug
      if (something === "like") params.slug = slug
      if (something === "home") params.page_size = 24

      if (priceFrom) params.filterFromPrice = priceFrom
      if (priceTo) params.filterToPrice = priceTo
      const res = await axios.get(`${BASE_URL}/products/`, {
        params: params,
      })
      return res.data
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)

export const getSearchedProducts = createAsyncThunk(
  "GET_SEARCHED_PRODUCTS",
  async (something, { getState, rejectWithValue }) => {
    try {
      const { pageSize, sort } = getState().params
      let params = { page_size: pageSize, sort: sort }
      params.search = getState().products?.search
      const res = await axios.get(`${BASE_URL}/products/`, {
        params: params,
      })
      return { res }
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)

export const getNewPage = createAsyncThunk(
  GET_NEW_PAGE,
  async (url, { getState, dispatch, rejectWithValue }) => {
    try {
      const res = await axios.get(url)
      return { res }
    } catch (err) {
      return rejectWithValue(err?.res)
    }
  },
)

export const getProduct = createAsyncThunk(
  GET_PRODUCT,
  async (slug, { getState, dispatch, rejectWithValue }) => {
    try {
      const params = { slug }
      const res = await axios.get(`${BASE_URL}/product`, { params })
      return { res }
    } catch (err) {
      return rejectWithValue(err?.res)
    }
  },
)
