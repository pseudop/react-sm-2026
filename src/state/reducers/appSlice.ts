// src/features/counter/appSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IPost } from '../../types';

export interface IAppState {
  count: number
  theme: 'light' | 'dark'
  posts: IPost[]
}

const initialState: IAppState = {
  count: 0,
  theme: 'dark',
  posts: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    TOGGLE_THEME: (state) => { state.theme = state.theme === 'dark' ? 'light' : 'dark' },
    INCREMENT: (state) => { state.count += 1; },
    DECREMENT: (state) => { state.count -= 1; },
    UPDATE_POSTS: (state, action: PayloadAction<IPost[]>) => { state.posts = action.payload }
  },
});

export const {
  TOGGLE_THEME,
  INCREMENT,
  DECREMENT,
  UPDATE_POSTS
} = appSlice.actions;
export default appSlice.reducer;
