import { FunctionComponent } from "react";

export interface AlertProps {
  show: boolean;
  text: string;
}

export const Alert: FunctionComponent<AlertProps> = ({ show, text }) => {
  return show ? <div className={`alert alert-danger`}>{text}</div> : null;
};
