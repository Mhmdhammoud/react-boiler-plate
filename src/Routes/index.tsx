import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
    HomePage,
} from '../pages'

export interface IRoutesConfiguration {
    path: string
    exact: boolean
    component: any
    isPrivate: boolean
    isAuthenticated?: boolean
}

//TO-Do incase we need subroutes---> https://reactrouter.com/web/example/route-config
const routesConfiguration: IRoutesConfiguration[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        isPrivate: false,
    },

]
// incase we needed seperate store use context check this link https://react-redux.js.org/api/hooks#custom-context
export default function Routes() {
    return (
        <Switch>
            {routesConfiguration.map((route, index) => (
                <Route {...route} key={index}/>
            ))}
        </Switch>
    )
}
