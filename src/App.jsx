import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import { Toaster } from "react-hot-toast";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="employeeDashboard" element={<ProtectedRoute> <EmployeeDashboard /> </ProtectedRoute>} />
        <Route path="adminDashboard" element={<ProtectedRoute> <AdminDashboard /> </ProtectedRoute>} />
        <Route path="home" element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;