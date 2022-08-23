import axios from 'axios';
import { API_URL } from "./Configuration";
import  history from '../Utils/customHistory'

const FetchClient = () => {
    // let navigate = useNavigate();
    const defaultOptions = {
        baseURL: `${API_URL}/api/`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials':true
        },
    };

    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use(config => {
        const token = localStorage.getItem('token');
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
        return config;
    });

    instance.interceptors.response.use(
        response => {
            if(response.data.token){
                localStorage.setItem('token', response.data.token)
            }
            return response;
        },
        (error) => {
            //  TODO: Add response message later for error page
            if(error || error.response.status === 401){
                window.location.href = '/errorpage'
            }

            history.replace("/errorpage");
            return Promise.reject(error)
        }
    )

    return instance;
};

export default FetchClient();