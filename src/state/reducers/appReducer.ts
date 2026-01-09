import type { IPost } from "../../types";

export interface IAppState {
  count: number
  theme: 'light' | 'dark'
  posts: IPost[]
}

export type AppAction =
  | { type: "INCREMENT"; payload: string }
  | { type: "DECREMENT"; payload: string }
  | { type: "TOGGLE_THEME"; payload: string }
  | { type: "UPDATE_POSTS"; payload: object }

export const initialAppState: IAppState = {
  count: 0,
  theme: 'dark',
  posts: [],
};

export const appReducer = (state: IAppState, action: { type: string; payload?: any }): IAppState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    case "UPDATE_POSTS":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
