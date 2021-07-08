import {AuthActions} from '../models/redux/Types'
import {IAuthState} from "../models/Itypes";

const initState: IAuthState = {
    isAuthenticated: false,
    user: {
        type: '',
        fname: '',
        lname: '',
        email: '',
    },
}
const AuthReducer = (state: IAuthState = initState, action: AuthActions) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.user_info,
            }
        default:
            return state
    }
}
export default AuthReducer
