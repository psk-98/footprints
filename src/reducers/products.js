import { GET_PRODUCT, GET_PRODUCTS, UPDATE_FILTERS, UPDATE_PANEL, LOADING } from "../actions/types";

const initState = {
    products: [],
    product: '',
    prevPage: null,
    nextpage: null,
    currentPage: 1,
    pageSize: 4,
    numProducts: 0,
    panelStatus: false,
    loading: false
}

export default function(state = initState, action) {
    switch (action.type) {
        case UPDATE_PANEL:
            return {
                ...state,
                panelStatus: action.payload
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.results,
                prevPage: action.payload.previous,
                nextpage: action.payload.next,
                numProducts: action.payload.count,
                loading: false
            }
        case UPDATE_FILTERS:
            return {
                ...state,
                panelStatus: action.payload.panelStatus,
                loading: false
                
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}