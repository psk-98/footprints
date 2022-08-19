import {  LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOADED , AUTH_ERROR, REGISTER_FAIL ,REGISTER_SUCCESS} from "../actions/types";

const initState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
}

export default function( state = initState, action) {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('userid', action.payload.user.id) 
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            localStorage.removeItem('userid')
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                isLoading: false,
                user: null
            }
        default:
            return state
    }
}