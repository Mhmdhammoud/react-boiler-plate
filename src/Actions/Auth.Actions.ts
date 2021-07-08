import {Dispatch} from 'redux'
import {AppActions} from '../models/redux/Types'
import {AppState} from '../reducers'
import {IUser} from '../models/Itypes'
import Cookies from 'universal-cookie'
import axios from 'axios'
import {ApiConstants} from "../Constants/ApiConstants";

interface Payload {
    readonly email: string
    readonly password: string
    readonly userType?: string
}

const cookies = new Cookies()
export const login = (user_info: IUser): AppActions => ({
    type: 'LOGIN',
    user_info,
})


export const startLogin = (payload: Payload) => {
    return (dispatch: Dispatch<AppActions> | any, getState: () => AppState) => {
        axios({
            method: 'POST',
            url: ApiConstants.LOGIN,
            data: {
                email: payload.email,
                password: payload.password,
            },
        })
            .then((res) => {
                const {token, type, fname, email, lname} =
                    res.data.api
                if (token) {
                    cookies.set('token', token, {path: '/'})
                    cookies.set('type', type, {path: '/'})
                    cookies.set('fname', fname, {path: '/'})
                    cookies.set('lname', lname, {path: '/'})
                    cookies.set('email', email, {path: '/'})

                    dispatch(login({type, fname, lname, email}))
                    const state = getState()
                    const {isAuthenticated} = state.auth
                    if (!isAuthenticated) console.log('error')
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data)
                } else {
                    console.log(err)
                }
            })
    }
}
