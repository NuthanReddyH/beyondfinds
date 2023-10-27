import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../api/auth';
import axios from 'axios';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await loginUser(username, password);
      return response.data; // Assuming the API response contains the user data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Login failed');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    rehydrateAuthState(state) {
      const token = localStorage.getItem('token');
      const userInfo = localStorage.getItem('userInfo');

      if (token && userInfo) {
        state.isAuthenticated = true;
        state.user = JSON.parse(userInfo);
        // Set the auth header for all requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    },
  },
  extraReducers: {
    [loginThunk.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    [loginThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Login failed';
    },
  },
});

export const { logout, rehydrateAuthState } = authSlice.actions;

export default authSlice.reducer;
