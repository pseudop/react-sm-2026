// src/features/counter/userSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  username: string
  email: string
  address: {
    street: string
    city: string
  }
}

const initialState: IUser = {
  username: 'Mr Redux',
  email: 'redux@email.co',
  address: {
    street: 'Redux st.',
    city: 'Redux city '
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UPDATE_USER: (state, action: PayloadAction<Partial<IUser>>) => {
      return { ...state, ...action.payload }
    },
    UPDATE_ADDRESS: (state, action: PayloadAction<Partial<{ street: string, city: string }>>) => {
      return { ...state, address: { ...state.address, ...action.payload } };
    }
  }
});

export const { UPDATE_USER, UPDATE_ADDRESS } = userSlice.actions;
export default userSlice.reducer;
