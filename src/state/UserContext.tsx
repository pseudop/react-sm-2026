import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { initialUserState, userReducer, type IUser, type UserAction } from "./reducers/userReducer";

interface IUserContext {
  state: IUser,
  dispatch: Dispatch<UserAction>
}

export const UserContext = createContext<IUserContext>({ state: initialUserState, dispatch: () => { } })

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
