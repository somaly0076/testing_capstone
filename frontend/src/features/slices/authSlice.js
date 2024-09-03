import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FORGOT_PASSWORD_URL,
  LOGIN_URL,
  NODE_ENV,
  REGISTER_URL,
  RESET_PASSWORD_URL,
} from "../../constants";

// Register thunk
export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      firstName,
      lastName,
      userName,
      email,
      password,
      passwordConfirm,
      formType,
      businessName,
      businessAddress,
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(REGISTER_URL, {
        firstName,
        lastName,
        userName,
        email,
        password,
        passwordConfirm,
        formType,
        businessName,
        businessAddress,
      });
      return "Registration successful. You can now log in.";
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to register. Please try again.");
    }
  }
);

// Login thunk
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(LOGIN_URL, {
        email,
        password,
      });
      if (NODE_ENV === "development") {
        console.log(response);
      }
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("username", response.data.userName);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to log in. Please try again.");
    }
  }
);

// Forgot Password thunk
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      await axios.post(FORGOT_PASSWORD_URL, { email });
      return "Password reset email sent.";
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Failed to send password reset email. Please try again."
      );
    }
  }
);

// Reset Password thunk
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ token, password, passwordConfirm }, thunkAPI) => {
    try {
      await axios.patch(RESET_PASSWORD_URL(token), {
        password,
        passwordConfirm,
      });
      return "Password reset successful. You can now log in with your new password.";
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Failed to reset password. Please try again."
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    id: localStorage.getItem("id") || null,
    isAuthenticated: !!localStorage.getItem("token"), // true if token exists
    status: "idle",
    error: null,
    message: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.id = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("username");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.message = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.message = null;
      })
      // Login
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.message = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.isAuthenticated = true; // set authenticated state
        state.error = null;
        state.message = "Login successful.";
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.isAuthenticated = false;
        state.message = null;
      })
      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.message = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.message = null;
      })
      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.message = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.message = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
