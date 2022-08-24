import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMovieListApi } from './MovieApi';

const initialState = {
    data: [],
    isLoading: false,
}

export const getMovieList = createAsyncThunk(
    'getMovieList',
    async (_, thunkAPI) => {
        try{
            return await getMovieListApi()
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const movieSlice = createSlice({
    name: 'logins',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(getMovieList.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getMovieList.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
    }
})

export const selectMovieData = (state) => state.movie.data;

export default movieSlice.reducer;