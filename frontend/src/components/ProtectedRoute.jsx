import {Navigate} from 'react-router-dom'
import api from '../api'
import {jwtDecode} from 'jwt-decode'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'
import { useState, useEffect } from 'react'

function ProtectedRoute({children}){
    const [isAuthorized, setIsAuthorized] = useState(null)

    useEffect(()=>{
        auth().catch(()=>setIsAuthorized(false))
    },[])

    const refreshToken = async () => {
        const refreshtoken = localStorage.getItem(REFRESH_TOKEN)

        try{
            const response = api.post("/api/token/refresh", {refresh: refreshtoken})
            if(response.status === 200){
                localStorage.setItem(ACCESS_TOKEN, response.data.access)
                setIsAuthorized(true)
            } else {
                setIsAuthorized(false)
            }
        } catch(error){
            console.log(error)
            setIsAuthorized(false)
        } 
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(!token){
            setIsAuthorized(false)
            return
        }

        const decodedToken = jwtDecode(token) //decode the token
        const tokenExpiration = decodedToken.exp // get the token expiration
        const now = Date.now() / 1000 // get date/time in seconds

        // if token is expired, refresh it
        if(token < now){
            await refreshToken()
            console.log("refreshed token")
        } else {
            setIsAuthorized(true)
        }
    }

    if (isAuthorized === null){
        return <div>Loading....</div>
    }

    return isAuthorized? children : <Navigate to="/login/"/>
}


export default ProtectedRoute;