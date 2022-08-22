import http from '../../Utils/axios-utils'

export const loginApi = async () => {
    var data = await http.get('author/getall');
    console.log(data)
    return data;
}