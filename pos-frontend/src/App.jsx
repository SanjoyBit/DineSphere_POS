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

function Layout() {
  const isLoading = useLoadData();
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];
  const { isAuth } = useSelector((state) => state.user);

  if (isLoading) return <FullScreenLoader />;

  return (
    <>
      {/* Show header for non-authenticated routes */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        {/* Public Routes (Accessible to everyone) */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        
        <Route
          path="/orders"
          element={
              <Orders />
          }
        />
        <Route
          path="/tables"
          element={
            
              <Tables />
            
          }
        />
        <Route
          path="/forgot-password"
          element={
            
              <ForgotPassword />
            
          }
        />
        <Route
          path="/forgot-password/otp"
          element={
            
              <OTPInput />
            
          }
        />
        <Route
          path="/forgot-password/otp/reset-password"
          element={
            
              <ResetPassword />
            
          }
        />
        <Route
          path="/dashboard"
          element={
              <Dashboard />
          }
        />
        <Route
          path="/inventory"
          element={
              <Inventory />
          }
        />
        {/* Auth Route (Redirect if already authenticated) */}
        <Route path="/auth" element={isAuth ? <Navigate to="/" /> : <Auth />} />
        
        {/* 404 Route (Not Found) */}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

// Protected route wrapper
// function ProtectedRoutes({ children }) {
//   const { isAuth } = useSelector((state) => state.user);
//   if (!isAuth) {
//     return <Navigate to="/auth" />;
//   }
//   return children;
// }

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
