import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { appReducer, initialAppState, type AppAction, type IAppState } from "./reducers/appReducer";

interface IAppContext {
  state: IAppState,
  dispatch: Dispatch<AppAction>
}

export const AppContext = createContext<IAppContext>({ state: initialAppState, dispatch: () => { } })

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
