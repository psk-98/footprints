import { GET_PRODUCT, GET_PRODUCTS, UPDATE_FILTERS, UPDATE_PANEL, UPDATE_CATEGORY, LOADING } from "../actions/types";

const initState = {
    products: [],
    product: '',
    prevPage: null,
    nextpage: null,
    currentPage: 1,
    priceFrom: '',
    priceTo: '',
    pageSize: 4,
    numProducts: 0,
    sizeList: [],
    sort: '-date_added',
    panelStatus: false,
    category: null,
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
                sort: action.payload.sort,
                sizeList: action.payload.sizeList,
                panelStatus: action.payload.panelStatus,
                loading: false
                
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                category: action.payload
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