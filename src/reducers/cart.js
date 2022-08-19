import { ADD_CART, DECREASE_QUANTITY, DELETE_CART, INCREASE_QUANTITY, GET_NUMBER_CART, PLACING_ORDER, CHECKOUT_SUCCESS } from "../actions/types"


const initState = {
    numberCart: 0,
    cart: [],
}

export default function(state = initState, action) {
    switch(action.type) {
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            if(state.numberCart === 0) {
                let cart = {
                    id: action.payload.product.id,
                    name: action.payload.product.name,
                    image: action.payload.product.product_images[0].get_image,
                    price: action.payload.product.price,
                    quantity: 1,
                    size: action.payload.size,
                    product: action.payload.product.id
                }
                state.cart.push(cart)
            }
            else {
                let check = false
                state.cart.map((item, key) => {
                    if(item.id === action.payload.product.id && item.size === action.payload.size) {
                        state.cart[key].quantity++
                        check=true
                    }
                })
                if(!check) {
                    let _cart = {
                        id: action.payload.product.id,
                        quantity: 1,
                        name: action.payload.product.name,
                        image: action.payload.product.product_images[0].get_image,
                        price: action.payload.product.price,
                        size: action.payload.size,
                        product: action.payload.product.id
                        
                    }
                    state.cart.push(_cart)
                }
            }
            return {
                ...state,
                numberCart: state.numberCart+1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.cart[action.payload].quantity++
            return {
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.cart[action.payload].quantity
            if(quantity > 1) {
                state.numberCart--
                state.cart[action.payload].quantity--
            }
            return {
                ...state
            }
        case DELETE_CART:
            let quantity_ = state.cart[action.payload].quantity
            return{
                ...state,
                numberCart: state.numberCart - quantity_,
                cart: state.cart.filter(item => {
                    return item.id !== state.cart[action.payload].id || item.size !== state.cart[action.payload].size
                })
            }
        default:
            return state
    }
}