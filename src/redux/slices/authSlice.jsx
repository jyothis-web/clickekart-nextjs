import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../utils/axiosClient";

// Register User
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (form, { rejectWithValue }) => {
    try {
      // await axiosClient.get("/sanctum/csrf-cookie"); // Get CSRF token
      const response = await axiosClient.post("/insertCustomer", form,);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      await axiosClient.get("/sanctum/csrf-cookie");
      const response = await axiosClient.post("/api/login", credentials);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

// Logout User
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await axiosClient.post("/api/logout");
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.loading = true; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
