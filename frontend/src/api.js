import axios from 'axios';
import {ACCESS_TOKEN} from './constants';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN) // get access token from localstorage
        if(token){
            config.headers.Authorization = `Bearer $token`;
        }
        return config;
    },
    (error) => {
        return Promise.reject.apply(error)
    }
)

export default api;

