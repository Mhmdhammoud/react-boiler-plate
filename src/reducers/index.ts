
import authReducer from './Auth.Reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
