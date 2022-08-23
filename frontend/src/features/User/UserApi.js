import http from '../../Utils/axios-utils'
import axios from "axios";

//Hard Code temporary
const KEY = 'AIzaSyCnu1L2l2q34Wz7r09hD8CQxo10hKtwK4I'

const youtubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos',
    params: {
        part: 'snippet',
        id: '33-Y9vT4vR0',
        key: KEY
    }
})

export const getUserApi = async () => {
    let response = await youtubeApi.get('');
    //response.data.items[0].snippet.title
    //response.data.pageInfo.totalResults
    debugger
    return await http.get('user/GetUserInfo');
}