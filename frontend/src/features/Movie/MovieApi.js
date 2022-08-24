import http from '../../Utils/axios-utils'
import axios from "axios";

//Hard Code Dev Key temporary
const KEY = 'AIzaSyCnu1L2l2q34Wz7r09hD8CQxo10hKtwK4I'

const youtubeApi = (videoId) => axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos',
    params: {
        part: 'snippet',
        id: videoId, // format: '33-Y9vT4vR0',
        key: KEY
    }
})

export const getYoutubeInfoApi = async (videoId) => {
    try{
        const response = await youtubeApi(videoId).get('');
        const data = {
            videoId: videoId,
            title: response.data.items[0].snippet.title,
            description: response.data.items[0].snippet.description
        }
        return data;
    } catch (e) {
        return null
    }
}

export const sendYoutubeInfoApi = async (data) => {
    const body = JSON.stringify(
        {
            videoId: data.videoId,
            title: data.title,
            description: data.description
        })

    return await http.post('movie/Share', body)
}

export const getMovieListApi = async () => {
    let response = await http.get('movie/getall')
    return response.data
}