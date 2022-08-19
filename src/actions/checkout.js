import axios from "axios"
import { persistor } from "../store/store"
import { tokenConfig } from "./accounts"
import { BASE_URL, CHECKOUT_SUCCESS, PLACING_ORDER } from "./types"


export const placingOrder = () => {
    console.log("loading")
    return{
        type: PLACING_ORDER
    }
}

export const placeOrder = (shipDetails, payment) => (dispatch, getState) => {
    console.log('placign order')
    dispatch({
        type: PLACING_ORDER
    })
    
    const { name,
        email,
        address,
        city,
        country,
        postal} = shipDetails

const customer_address = {
        name,
        email,
        address,
        city,
        country,
        postal,
        user: null,
        default: true,
        address_type: "S"
    }

    const order_items = getState().cart.cart

    const payment_method_id = payment

    const body = {
        customer_address,
        order_items,
        payment_method_id
    }
    axios.post(`${BASE_URL}/orders/`, body)

    .then(res => {
            dispatch({
                type: CHECKOUT_SUCCESS
            })
            persistor.purge()
    })
    .catch(err => {
        console.log(err.response)
        /*dispatch(
            returnError(err.response.data, err.response.status)
        )*/
    })
}

export const  placeOrders = (shipDetails, payment, cart) => {
    console.log(shipDetails)
    placingOrder()


    const { name,
            email,
            address,
            city,
            country,
            postal} = shipDetails

    const customer_address = {
            name,
            email,
            address,
            city,
            country,
            postal,
            user: null,
            default: true,
            address_type: "S"
        }

        
    const order_items = cart

    const payment_method_id = payment
    
    const body = {
        customer_address,
        order_items,
        payment_method_id
    }

    
    console.log(body)
    axios.post(`${BASE_URL}/orders/`, body, {
        'Content-Type': 'application/json',
        'Authorization': "b58061d5e641076f4b99a1f06eacbead52fc32ec3a2470c68544be9dedcf53f8"
    })
    .then(res => {
        
        checkedOut()   
    })
    .catch(err => console.log(err))
}

export const checkedOut = () => {
    return {
        type: CHECKOUT_SUCCESS
    }
}