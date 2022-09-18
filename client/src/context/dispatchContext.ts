import { createContext, Dispatch, useContext } from "react";
import { AppReducerAction } from "./reducer";

export const DispatchContext = createContext<Dispatch<AppReducerAction>>(
  () => {}
);

export const useDispatch = () => {
  return useContext(DispatchContext);
};
