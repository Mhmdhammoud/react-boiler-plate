import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './config/index'
import {createBrowserHistory} from 'history'
const store = configureStore()
const history=createBrowserHistory()

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>,
        document.getElementById('root')
    )
}

if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    ;(module as any).hot.accept('./App', renderApp)
}

renderApp()
