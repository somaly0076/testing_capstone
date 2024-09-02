import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FETCH_PROFILE } from "../../constants";

// Helper function to get the token from localStorage
const getToken = () => localStorage.getItem("token");

const headersWithToken = () => ({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

// Fetch profile
export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (userName, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        FETCH_PROFILE(userName),
        headersWithToken()
      );
      if (!userName) {
        throw new Error("User Name is required");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update profile
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ userName, formData }, { rejectWithValue }) => {
    try {
      if (!userName) {
        throw new Error("You must login.");
      }

      const response = await axios.patch(FETCH_PROFILE(userName), formData, {
        ...headersWithToken(),
        headers: {
          ...headersWithToken().headers,
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    userName: "",
    loading: false,
    error: null,
    isEditing: false,
    newBio: "",
  },
  reducers: {
    setEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    setNewBio: (state, action) => {
      state.newBio = action.payload;
    },
    resetState: (state) => {
      state.newBio = "";
      state.error = null;
      state.userName = "";
    },
    setUserName: (state, action) => {
      state.userName = action.payload; // Add a reducer to set userName
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.userName = action.payload.userName; // Update userName from profile data
        state.loading = false;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profile = { ...state.profile, ...action.payload };
        state.userName = action.payload.userName; // Update userName if changed
        state.loading = false;
        state.isEditing = false;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setEditing, setNewBio, resetState, setUserName } =
  userSlice.actions;

export default userSlice.reducer;
