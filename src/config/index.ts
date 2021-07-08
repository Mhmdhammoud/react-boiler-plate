import {applyMiddleware, compose, createStore} from 'redux'
import thunk, {ThunkMiddleware} from 'redux-thunk'
import {AppActions} from '../models/redux/Types'
import rootReducer, {AppState} from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'


const configStore = () => {
    const middlewares = [
        thunk as ThunkMiddleware<AppState, AppActions>,
    ]
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const enhancers = [middlewareEnhancer]
    const composedEnhancers: any = compose(...enhancers)
    const store = createStore(rootReducer, composeWithDevTools(composedEnhancers))
    if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
        ;(module as any).hot.accept('../reducers', () =>
            store.replaceReducer(rootReducer)
        )
    }

    return store
}
export default configStore
