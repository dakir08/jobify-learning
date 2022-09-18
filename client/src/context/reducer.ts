import { Action } from "./actions";

type State = {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
};

export type ReducerAction = {
  type: Action;
};

export const reducer = (state: State, action: ReducerAction): State => {
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

    default:
      return state;
  }
};
