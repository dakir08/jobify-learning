import { Action } from "./actions";

type State = {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
};

type ReducerAction = {
  type: Action;
};

export const reducer = (state: State, action: any): State => {
  switch (action.type) {
    case Action.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertText: "Please provide all values!",
        alertType: "danger",
      };

    default:
      return state;
  }
};
