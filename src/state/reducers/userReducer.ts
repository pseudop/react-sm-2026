export interface IUser {
  username: string
  email: string
  address: {
    street: string
    city: string
  }
}

export type UserAction =
  | { type: "UPDATE_USER"; payload: object }
  | { type: "UPDATE_ADDRESS"; payload: object }

export const initialUserState: IUser = {
  username: 'xenos',
  email: 'emfrr@email.co',
  address: {
    street: '12 Main St',
    city: 'Anytown'
  }
};

export const userReducer = (state: IUser, action: UserAction) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, ...action.payload };
    case 'UPDATE_ADDRESS':
      return { ...state, address: { ...state.address, ...action.payload } };
    default:
      return state;
  }
}
