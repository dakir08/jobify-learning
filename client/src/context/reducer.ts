import { User } from "../models/User";
import { Nullable } from "../types/common";
import { Action } from "./actions";

export type State = {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  user: Nullable<User>;
  token: Nullable<string>;
};

export type AppReducerAction = {
  type: Action;
  payload?: any;
};

export const reducer = (state: State, action: AppReducerAction): State => {
  switch (action.type) {
    case Action.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertText: "Please provide all values!",
        alertType: "danger",
      };

    case Action.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };

    case Action.AUTHENTICATE_USER_BEGIN:
      return { ...state, isLoading: true };

    case Action.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        showAlert: true,
        alertType: "success",
        alertText: action.payload.alertText,
      };

    case Action.AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };

    default:
      throw new Error(`no such action: ${action.type}`);
  }
};
