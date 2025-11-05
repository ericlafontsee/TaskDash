import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type User = {
  id: string;
  name: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null
};

// 🔁 createAsyncThunk replaces writing manual thunk action creators
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { username: string; password: string }) => {
    // Simulate API delay
    await new Promise((res) => setTimeout(res, 1000));

    // Simulated login logic
    if (credentials.username === 'admin' && credentials.password === 'password') {
      return {
        user: { id: '1', name: 'Admin' },
        token: 'fake-jwt-token'
      };
    } else {
      throw new Error('Invalid credentials');
    }
  }
);

// ✅ createSlice auto-generates action creators and handles reducer logic
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Login failed';
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
