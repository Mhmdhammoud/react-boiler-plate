import React,{useEffect} from 'react';
import './App.css';
import {useAppInit} from "./Hooks";
import {useDispatch} from "react-redux";
import Cookies from 'universal-cookie'
import Routes from './Routes'
const App = () => {
    useAppInit()

    const dispatch = useDispatch()

    const cookies = new Cookies()

    useEffect(() => {
    }, [])

    return <Routes />
}

export default App;
