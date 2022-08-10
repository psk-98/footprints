import { CHANGE_SHOW, GET_ERRORS } from '../actions/types';

const initialState = {
  msg: {},
  status: null,
  show: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: action.payload.msg,
        status: action.payload.status,
      }
    case CHANGE_SHOW:
      return {
        ...state,
        show: action.payload
      }
    default:
      return state;
  }
  
}