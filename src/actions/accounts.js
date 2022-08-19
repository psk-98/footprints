import { BASE_URL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, IS_MY_PROFILE, PROFILE_LOADED, USER_LOADED, USER_LOADING, AUTH_ERROR, REGISTER_FAIL ,REGISTER_SUCCESS, ADDRESS_CREATED } from './types'
import axios from 'axios'

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING})

    axios.get(`${BASE_URL}/user`, tokenConfig(getState))
    .then(res => {
        console.log(res.data)
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: AUTH_ERROR
        })
    })
    
}

export const login = (username, password) => (dispatch, getState) => {
    const body = {
                    username,
                    password
                }
    axios.post(`${BASE_URL}/login/`, body)
    .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
    })
    .catch(err => {
        console.log(err.response)
        /*dispatch(
            returnError(err.response.data, err.response.status)
        )*/
        dispatch({
            type: LOGIN_FAIL
        })
    })
}

export const logout = () => (dispatch, getState) => {

    axios.post(`${BASE_URL}/logout/`, null, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: LOGOUT_SUCCESS
        })
    })
    .catch(err => {
        console.log(err)
    })     
}

export const register = ({name, surname, email, password}) => (dispatch, getState) => {
    const body = {
                    first_name: name,
                    last_name: surname,
                    username: `${email}`,
                    email,
                    password
                }

    axios.post(`${BASE_URL}/register/`, body)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        /*dispatch(
            returnError(err.response.data, err.response.status)
        )*/
        dispatch({
            type: REGISTER_FAIL
        })
    })
}

export const tokenConfig = getState => {
    const token = getState().accounts.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
 
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }

    return config
}