import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { DispatchContext } from "./dispatchContext";
import { reducer, State } from "./reducer";

export const initialState: State = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  token: null,
};

const AppContext = createContext(initialState);

export const AppProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
