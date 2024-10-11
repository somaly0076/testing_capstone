// src/features/slices/universitySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import config from "../../config"
import { setCurrentPage, setTotalPage } from './paginationSlice';

export const fetchUniversities = createAsyncThunk(
    'universities/fetchUniversities',
    async ({ page , limit, category, model }, { dispatch }) => {
        const response = await axios.get(`${config.universities.getAllUniversity(category, model)}?page=${page}&limit=${limit}`);
        
        // Dispatch actions to update pagination state
        dispatch(setTotalPage(response.data.pagination.totalPages));
        dispatch(setCurrentPage(response.data.pagination.currentPage));
        
        return response.data;
    }
);


export const fetchUniversity = createAsyncThunk(
    'universities/fetchUniversity',
    async (id) => {
        const response = await axios.get(`${config.universities.getAllUniversity}/${id}`);
        return response.data;
    }
)

const universitySlice = createSlice({
    name: 'universities',
    initialState: {
        universities: [],
        universityId: 0,
        university: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUniversities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUniversity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUniversities.fulfilled, (state, action) => {
                state.loading = false;
                state.universities = action.payload.data;
            })
            .addCase(fetchUniversity.fulfilled, (state, action) => {
                state.loading = false;
                state.university = action.payload.university;
            })
            .addCase(fetchUniversities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUniversity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default universitySlice.reducer;
