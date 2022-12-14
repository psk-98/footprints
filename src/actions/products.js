import axios from "axios"
import { GET_PRODUCT, GET_PRODUCTS, UPDATE_CATEGORY, UPDATE_FILTERS, UPDATE_PANEL, LOADING } from "./types"

const BASE_URL = 'https://footprintz.herokuapp.com/api'

export const getProduct = (url) => (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true
    })
    axios.get(`${BASE_URL}${url}`)
    .then(res => {
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}

export const getProducts = (page) => (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true
    })
    axios.get(`${BASE_URL}/latest-products/?page${page}&page_size=10`)
    .then(res => {
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}

export const getFilteredProducts = () => (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true
    })
    const {sizeList, pageSize, sort, category} = getState().products
    console.log(getState())
    let params = {}
    if (category === null)
    {   
        params = {
            page_size: pageSize,
            sort: sort,
        }
    }
    else
    {
        params = {
            page_size: pageSize,
            sort: sort,
            category: category
        }
    }
    axios.get(`${BASE_URL}/products?sizes=[${sizeList}]`, {params: params})
    .then(res => {
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}

export const getNewPage = (url) => (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true
    })
    axios.get(`${url}`)
    .then(res => {
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}

export const updateFilters = payload => {
    return {
        type: UPDATE_FILTERS,
        payload
    }
}

export const updatePanelStatus = payload => {
    return {
        type: UPDATE_PANEL,
        payload
    }
}

export const updateCategory = payload => {
    return {
        type: UPDATE_CATEGORY,
        payload
    }
}