import axios from "axios"
import { ADD_CART, DECREASE_QUANTITY, DELETE_CART, GET_NUMBER_CART, INCREASE_QUANTITY, GET_ALL_PRODUCTS } from "./types"

const BASE_URL = 'http://127.0.0.1:8000/api'

export const getAllProducts = () => (dispatch, getState) => {
    axios.get(`${BASE_URL}/latest-products/`)
    .then(res => {
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}

export const getCartNumber = () => {
    return {
        type: GET_NUMBER_CART
    }
}

export const addCart = (product) => {
    console.log(product)
    return {
        type: ADD_CART,
        payload: product
    }
}

export const deleteCart = (product) => {
    return {
        type: DELETE_CART,
        payload: product
    }
}

export const increaseQuantity = (product) => {
    return {
        type: INCREASE_QUANTITY,
        payload: product
    }
}

export const decreaseQuantity = (product) => {
    return {
        type: DECREASE_QUANTITY,
        payload: product
    }
}