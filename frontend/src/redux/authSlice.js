// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    registerFailure(state, action) {
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:4000/api/users/login", {
      email,
      password,
    });
    dispatch(loginSuccess(response.data.user));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || "Login failed"));
  }
};

export const register =
  (name, email, password, passwordConfirm) => async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/signup",
        {
          name,
          email,
          password,
          passwordConfirm,
        }
      );
      dispatch(registerSuccess(response.data.user));
    } catch (error) {
      dispatch(
        registerFailure(error.response?.data?.message || "Registration failed")
      );
    }
  };

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

export default authSlice.reducer;
