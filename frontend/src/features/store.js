import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import pagReducer from './slices/paginationSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    pagination: pagReducer,
  },
});
