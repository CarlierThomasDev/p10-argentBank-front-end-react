import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Récupération du token depuis localStorage ou sessionStorage
const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token');

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, { getState }) => {
    const token = getState().auth.token;
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();
    return data.body;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: storedToken || null,
    user: null,
    isAuthenticated: !!storedToken,
    status: 'idle',
    error: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      // Suppression du token du stockage
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.error.message;
        state.isAuthenticated = false;
      });
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
