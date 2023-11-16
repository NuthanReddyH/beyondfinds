import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteUser, getUsers, getUsersCount, loginUser, updateUser, addToFavorites } from '../api/auth';
import axios from 'axios';

export const addToFavoritesThunk = createAsyncThunk(
  'addfavorites',
  async ({ username, productId }, thunkAPI) => {
    try {
      const response = await addToFavorites(username, productId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Add to favorites failed');
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await loginUser(username, password);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Login failed');
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  'auth/updateUser',
  async (userData, thunkAPI) => {
    try {
      const response = await updateUser(userData); // Assuming updateUser is similar to loginUser in usage
      return {
        user: response.user,
        message: response.message,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Update failed');
    }
  }
);

export const getUsersThunk = createAsyncThunk(
  'auth/getUsers',
  async (_, thunkAPI) => {
    try {
      const response = await getUsers();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Could not fetch users');
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  'auth/deleteUser',
  async (userId, thunkAPI) => {
    try {
      const response = await deleteUser(userId);
      return response; // This should contain the ID of the deleted user or a success message
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Could not delete user');
    }
  }
);

export const getUsersCountThunk = createAsyncThunk(
  'auth/getUsersCount',
  async (_, thunkAPI) => {
    try {
      const response = await getUsersCount(); // Replace with your actual API endpoint for user count
      return response; // Assuming the API returns an object with a count property
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Could not fetch users count');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    users: [],
    isAuthenticated: false,
    usersCount: 0,
    loading: false,
    error: null,
    isAdmin: false
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.isAdmin = false;
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
      console.log({action})
      state.user = action.payload.user;
      state.isAdmin = action.payload.isAdmin
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    [loginThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Login failed';
    },
    [updateUserThunk.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      state.error = null;
      state.lastUpdateMessage = action.payload.message;
    },
    [updateUserThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Update failed';
    },
    [getUsersThunk.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getUsersThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Could not fetch users';
    },
    [deleteUserThunk.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteUserThunk.fulfilled]: (state, action) => {
      // Remove the deleted user from the state
      state.users = state.users.filter((user) => user.id !== action.payload.id);
      state.loading = false;
      state.error = null;
    },
    [deleteUserThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Could not delete user';
    },
    [getUsersCountThunk.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getUsersCountThunk.fulfilled]: (state, action) => {
      state.usersCount = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getUsersCountThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Could not fetch users count';

    },

    [addToFavoritesThunk.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addToFavoritesThunk.fulfilled]: (state, action) => {
      // Assuming the response contains the updated user data
      state.user = action.payload.user;
      state.loading = false;
      state.error = null;
    },
    [addToFavoritesThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Add to favorites failed';
    },
  },
});

export const { logout, rehydrateAuthState } = authSlice.actions;

export default authSlice.reducer;
