import http from '../../Utils/axios-utils'

export const registerUser = async (email, password) => {
    let body = JSON.stringify({ email: email, password: password});
    let data = await http.post('auth/register', body);
    return data;
}