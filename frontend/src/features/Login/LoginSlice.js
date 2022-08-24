import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginApi } from './LoginApi';
import { getUserApi } from '../User/UserApi'

const initialState = {
    data: [],
    isLoading: false,
}

export const Login = createAsyncThunk(
    'login',
    async (form, thunkAPI) => {
        try{
            await loginApi(form.getFieldValue('email'), form.getFieldValue('password'))
            const data = await getUserApi()
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const loginSlice = createSlice({
    name: 'logins',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(Login.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(Login.fulfilled, (state, action) => {
                state.isLoading = false
            })
    }
})

export const selectLoginData = (state) => state.login;

export default loginSlice.reducer;