import { GET_ERRORS, CREATE_MESSAGE, CHANGE_SHOW } from "./types";

export const createMessage = (msg) => {
    return {
      type: CREATE_MESSAGE,
      payload: msg,
    };
  };

// RETURN ERRORS
export const returnErrors = (msg, status) => {
    return {
      type: GET_ERRORS,
      payload: { msg, status },
    };
  };

export const changeShow = (payload) => {
  return {
    type: CHANGE_SHOW,
    payload
  }
}