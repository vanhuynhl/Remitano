import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {loginApi} from './LoginService';

const initialState = {
    data: []
}

export const Login = createAsyncThunk(
    'login',
    async (user, thunkAPI) => {
        try{
            const response = await loginApi()
            return response.data
        } catch (e) {
            console.log(e)
            thunkAPI.rejectWithValue(e)
        }
    }
)

const loginSlice = createSlice({
    name: 'logins',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(Login.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
    }
})

export const { } = loginSlice.actions;

export const selectLoginData = (state) => state.login.data;

export default loginSlice.reducer;