import { createContext, Dispatch, useContext } from "react";
import { ReducerAction } from "./reducer";

export const DispatchContext = createContext<Dispatch<ReducerAction>>(() => {});

export const useDispatch = () => {
  return useContext(DispatchContext);
};
