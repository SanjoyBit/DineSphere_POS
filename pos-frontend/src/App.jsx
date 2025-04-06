import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu, Dashboard } from "./pages";
import Header from "./components/shared/Header";
import { useSelector } from "react-redux";
import useLoadData from "./hooks/useLoadData";
import FullScreenLoader from "./components/shared/FullScreenLoader";
import ForgotPassword from "./pages/ForgotPassword";
import OTPInput from "./pages/OTPInput";
import ResetPassword from "./pages/ResetPassword";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AnimatePresence } from "framer-motion";
import UpdateProfile from "./pages/UpdateProfile";
import ChangePassword from "./pages/ChangePassword";
import Employees from "./pages/Employees";

function AnimatedRoutes() {
  const isLoading = useLoadData();
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/register", "/forgot-password", "/otp", "/forgot-password/reset-password"];
  const { isAuth } = useSelector((state) => state.user);

  if (isLoading) return <FullScreenLoader />;

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />

          {/* Auth Animated Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Other Auth Pages */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-password/otp" element={<OTPInput />} />
          <Route
            path="/forgot-password/reset-password"
            element={<ResetPassword />}
          />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/employees" element={<Employees />} />

          {/* Protected Routes */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />

          {/* Redirect if already authenticated */}
          <Route path="/auth" element={isAuth ? <Navigate to="/" /> : <Auth />} />

          {/* Not Found */}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
