import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { DispatchContext } from "./dispatchContext";
import { reducer, State } from "./reducer";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

export const initialState: State = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token ?? null,
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
