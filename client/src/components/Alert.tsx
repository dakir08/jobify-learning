import { FunctionComponent } from "react";
import { useAppContext } from "../context/appContext";

export interface AlertProps {
  show: boolean;
}

export const Alert: FunctionComponent<AlertProps> = ({ show }) => {
  const { alertType, alertText } = useAppContext();

  return show ? (
    <div className={`alert alert-${alertType}`}>{alertText}</div>
  ) : null;
};
