import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import { SharedLayoutWrapper } from "../wrappers/SharedLayout";

export interface DashboardLayoutProps {}

export const DashboardLayout: FunctionComponent<DashboardLayoutProps> = () => {
  return (
    <SharedLayoutWrapper>
      <nav>
        <Link to="add-job">add job</Link>
        <Link to="all-jobs">all jobs</Link>
        <Link to="add-job">add-job</Link>
        <Link to="profile">profile</Link>
      </nav>
      <Outlet />
    </SharedLayoutWrapper>
  );
};
