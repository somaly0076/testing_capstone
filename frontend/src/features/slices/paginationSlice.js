import { createSlice } from "@reduxjs/toolkit";
import { scholarships } from "../../components/scholarships";
const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    itemsPerPage: 3, // Fixed naming to match selector and action
    totalItems: scholarships.length,
    
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setItemsPerPage(state, action) { // Consistent naming
      state.itemsPerPage = action.payload;
    },
    setTotalItems(state, action) {
      state.totalItems = action.payload;
    },
    goToNextPage(state) {
      state.currentPage += 1; // Fixed the reference
    },
    goToPreviousPage(state) {
      if (state.currentPage > 1) {
        state.currentPage -= 1; // Fixed the reference
      }
    }
  }
});

export const {
  setCurrentPage,
  setItemsPerPage, // Corrected naming
  setTotalItems,
  goToNextPage,
  goToPreviousPage,
} = paginationSlice.actions;

export const selectCurrentPage = (state) => state.pagination.currentPage;
export const selectItemsPerPage = (state) => state.pagination.itemsPerPage; // Corrected naming
export const selectTotalItems = (state) => state.pagination.totalItems;

export default paginationSlice.reducer;
