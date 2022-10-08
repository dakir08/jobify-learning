import { Landing } from "./pages/Landing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Register } from "./pages/Register";
import { Error404 } from "./pages/Error";
import { Stats } from "./pages/Dashboard/Stats";
import { AllJobs } from "./pages/Dashboard/AllJobs";
import { AddJob } from "./pages/Dashboard/AddJob";
import { Profile } from "./pages/Dashboard/Profile";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { ProtectedRoute } from "./pages/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/landing">Landing</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
