import {PLACING_ORDER, CHECKOUT_SUCCESS } from "../actions/types"

const initState = {
    orderSuccess: false,
    loading: false,
}

export default function(state = initState, action) {
    switch(action.type) {
        case PLACING_ORDER:
            return {
                ...state,
                loading: true
            }
        case CHECKOUT_SUCCESS:
            return {
                ...state,
                orderSuccess: true,
                loading: false
            }
        default:
            return state
    }
}