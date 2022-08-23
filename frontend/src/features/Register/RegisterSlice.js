import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { registerUser } from './RegisterApi.js';

const initialState = {
    data: [],
    isLoading: false
}

export const Register = createAsyncThunk(
    'register',
    async (form, thunkAPI) => {
        try{
            const response = await registerUser(form.getFieldValue('email'), form.getFieldValue('password'))
            return response.data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(Register.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(Register.fulfilled, (state, action) => {
                state.isLoading = false
            })
    }
})

export const { } = registerSlice.actions;

export const selectRegisterData = (state) => state.register;

export default registerSlice.reducer;