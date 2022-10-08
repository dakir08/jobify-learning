import logo from "../assets/images/logo.svg";

import { FunctionComponent } from "react";

export interface LogoProps {}

export const Logo: FunctionComponent<LogoProps> = () => {
  return <img src={logo} alt="jobify" className="logo" />;
};
