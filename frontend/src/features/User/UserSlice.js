import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit'
import { getUserApi } from './UserApi.js';
import { Login } from '../Login/LoginSlice.js'

const initialState = {
    data: {},
    email: ''
}

export const GetUserInfo = createAsyncThunk(
    'getUserInfo',
    async (_, thunkAPI) => {
        try{
            return await getUserApi()
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(Login.fulfilled, (state, action) => {
                state.email = action.payload.data.email
            })
            .addCase(GetUserInfo.fulfilled, (state, action) => {
                state.email = action.payload.data.email
            })
    }
})

export const { } = userSlice.actions;

export const selectUserData = (state) => state.user;
export const selectEmail = (state) => state.user.email;

export default userSlice.reducer;