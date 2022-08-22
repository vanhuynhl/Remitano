import axios from 'axios';
import {API_URL,WEB_URL} from "./Configuration";

const fetchClient = () => {
    const defaultOptions = {
        baseURL: `${API_URL}/api/`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials':true
        },
    };

    // Create instance
    let instance = axios.create(defaultOptions);

    // Set the AUTH token for any request
    instance.interceptors.request.use(config => {
        const token = localStorage.getItem('token');
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
        return config;
    });

    instance.interceptors.response.use(
        response => response,
        (error) => {
            const originalRequest = error.config
            window.location.href = WEB_URL
            return Promise.reject(error)

            // if (
            //     error.response.status === 401 &&
            //     originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token'
            // ) {
            //     // router.push('/login')
            //     window.location.href = WEB_URL
            //     return Promise.reject(error)
            // }

            // if (error.response.status === 401 && !originalRequest._retry) {
            //     originalRequest._retry = true
            //     const refreshToken = localStorageService.getRefreshToken()
            //     return axios
            //         .post('/auth/token', {
            //             refresh_token: refreshToken
            //         })
            //         .then(res => {
            //             if (res.status === 201) {
            //                 localStorageService.setToken(res.data)
            //                 axios.defaults.headers.common['Authorization'] =
            //                     'Bearer ' + localStorageService.getAccessToken()
            //                 return axios(originalRequest)
            //             }
            //         })
            // }
            // return Promise.reject(error)
        }
    )

    return instance;
};

export default fetchClient();