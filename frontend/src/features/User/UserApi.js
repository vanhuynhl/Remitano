import http from '../../Utils/axios-utils'

export const getUserApi = async () => {
    return await http.get('user/GetUserInfo');
}