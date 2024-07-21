import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'http://localhost:7000';

// Define the async thunk for fetching data
export const fetchData = createAsyncThunk('data/fetchData', async (param) => {
    const response = await fetch(`${API_BASE_URL}/${param}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
});

// Create the slice
export const JSGetterSliceForYourRedux = createSlice({
    name: 'data',
    initialState: {
        items: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default JSGetterSliceForYourRedux.reducer;


// must import our slice into a store to be bble to get controller data directly in compoenent