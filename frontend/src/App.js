import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UserProfilePage from "./pages/UserProfilePage";
import InformationPage from "./pages/InformationPage";
import CompanyCard from "./components/CompanyCard";
import CompanyDetail from "./pages/CompanyDetail";
import Profile from "./components/reusable/Profile";
import AdminPanel from "./pages/Admin/AdminPanel";
import ErrorMessage from "./components/ErorrMessage";
import UserProfile from "./components/UserProfile";
import { ThemeProvider } from "@material-tailwind/react"; // Material Tailwind's ThemeProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/resetPassword/:token",
    element: <ResetPasswordPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/profile/:username",
    element: <Profile />,
  },
  {
    path: "/information",
    element: <InformationPage />,
  },
  {
    path: "/cardpage",
    element: <CompanyCard />,
  },
  {
    path: "/companydetail",
    element: <CompanyDetail />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/admin-content",
    element: <AdminPanel />,
  },
  {
    path: "/error",
    element: <ErrorMessage />,
  },
  {
    path : "/profile",
    element : <UserProfile/>
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
