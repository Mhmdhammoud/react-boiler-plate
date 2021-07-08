import React, {useEffect} from 'react'
import Api from "../Services/Api";


const useAppInit = () => {
    useEffect(() => {
        Api.init()
    }, [])
}
export default useAppInit
