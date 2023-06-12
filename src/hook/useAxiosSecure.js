import axios from "axios";
import { config } from "localforage";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";




const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`
})

// axios.get('url/path', data)
// axios.post('url/path', data)
// axios.put('url/path', data)

// axiosSecure.get(/path)

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        // const token = `bearer ${localStorage.getItem('access-token')}`

        // 1. intercept request (send to a request server )
        axiosSecure.interceptors.request.use(config => {
            const token = `bearer ${localStorage.getItem('access-token')}`
            if (token) {
                config.headers.Authorization = token
            }
            return config
        })


        // 2. intercept response (get a respponse from server side)
        axiosSecure.interceptors.response.use(response => response, async error => {
            if (error.response && error.response.status === 401 || error.response.status === 403) {
                await logOut()
                navigate('/login')
            }
            return Promise.reject.error
        }
        )
    }, [logOut, navigate, axiosSecure])


    return [axiosSecure]
}

export default useAxiosSecure