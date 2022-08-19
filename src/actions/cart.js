import { BASE_URL, ADD_CART, DECREASE_QUANTITY, DELETE_CART, GET_NUMBER_CART, INCREASE_QUANTITY, GET_ALL_PRODUCTS, CHECKOUT_SUCCESS, PLACING_ORDER } from "./types"

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