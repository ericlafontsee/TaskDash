// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/app/appSlice';
import themeReducer from '../features/theme/themeSlice'
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

  

const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
