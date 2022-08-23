import http from '../../Utils/axios-utils'

export const loginApi = async (email, password) => {
    let body = JSON.stringify({ email: email, password: password});
    return await http.post('auth', body);
}
