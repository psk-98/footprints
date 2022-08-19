import { UPDATE_CATEGORY, UPDATE_FILTERS, UPDATE_SEARCH} from '../actions/types';

const initialState = {
    priceFrom: null,
    priceTo: null,
    sizeList: null,
    sort: '-date_added',
    category: null,
    search: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
        return{
            ...state,
            priceFrom: null,
            priceTo: null,
            sizeList: null,
            category: null,
            search: action.payload
        }
    case UPDATE_CATEGORY:
        return {
            ...state,
            sizeList: null,
            priceFrom: null,
            priceTo: null,
            search: null,
            category: action.payload
        }
    case UPDATE_FILTERS:
        return {
            ...state,
            sort: action.payload.sort,
            sizeList: action.payload.sizeList,
            priceFrom: action.payload.fromPrice,
            priceTo: action.payload.toPrice,
            search: null,
        }
    default:
      return state;
  }
  
}