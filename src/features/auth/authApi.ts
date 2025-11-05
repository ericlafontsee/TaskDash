import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type LoginRequest = {
  username: string;
  password: string;
};

type LoginResponse = {
  user: { id: string; name: string };
  token: string;
};

// 🔁 RTK Query replaces createAsyncThunk + reducers
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // mock for now
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials
      })
    })
  })
});

// 👇 Auto-generated hook
export const { useLoginMutation } = authApi;
