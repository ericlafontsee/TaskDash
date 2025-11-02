import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
});

export const { increment } = appSlice.actions;
export default appSlice.reducer;
