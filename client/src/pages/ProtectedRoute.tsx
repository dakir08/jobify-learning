import { FunctionComponent, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

export interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  children,
}) => {
  const { token } = useAppContext();

  if (!token) {
    return <Navigate to={"/landing"} />;
  }

  return <>{children}</>;
};
