import { Landing } from "./pages/Landing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Register } from "./pages/Register";
import { Error404 } from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/landing">Landing</Link>
      </nav>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
