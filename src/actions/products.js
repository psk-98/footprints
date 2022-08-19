import axios from "axios"
import { BASE_URL, GET_PRODUCT, GET_PRODUCTS, UPDATE_CATEGORY, UPDATE_FILTERS, UPDATE_PANEL, LOADING, UPDATE_SEARCH } from "./types"


export const getProduct = (slug) => (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true
    })

    const params = { slug }
    axios.get(`${BASE_URL}/product`, {params})
    .then(res => {
        console.log(res.data)
        dispatch({
            type: GET_PRODUCT,
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

    const { priceFrom,
            priceTo,
            sizeList,
            sort,
            category,
            search} = getState().params

    const params = {
        sort
    }

    if (priceFrom !== null || priceFrom !== '' ) params.filterFromPrice = priceFrom
    if (priceTo !== null || priceTo !== '') params.filterToPrice = priceTo
    if (sizeList !== null) params.sizes = sizeList
    if (category !== null) params.category = category
    if (search !== null || search !== '' ) params.search = search

    console.log(params)

    axios.get(`${BASE_URL}/products/`, {params})
    .then(res => {
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}

export const getProducts = () => (dispatch, getState) => {
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
        console.log(res.data)
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

export const updateSearch = payload => {
    console.log(payload)
    return {
        type: UPDATE_SEARCH,
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