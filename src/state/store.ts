// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import appReducer from './reducers/appSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
