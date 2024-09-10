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
<<<<<<< HEAD
import ContactCard from "./components/reusable/ContactCard";
import JobCardPage from "./pages/JobCardPage";
import JobDetailPage from "./pages/JobDetailPage";

=======
import AdminPanel from "./pages/Admin/AdminPanel";
import ErrorMessage from "./components/ErorrMessage";
>>>>>>> 5790adb (admin panel , profile page)
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
    element: <CompanyCard/>,
  },
  {
    path: "/companydetail",
    element: <CompanyDetail/>,
  },
  {
    path : "/scholarships",
    element :''
  },
  {
    path : "/liveli-hood",
    element :''
  },
  {
    path: "/jobpage",
    element: <JobCardPage/>,
  },
  {
    path : "/about-us",
    element :''
  },
  {
    path : "/extra-money",
    element :''
  },
  {
    path : "/profile",
    element : <Profile/>
  },
  {
<<<<<<< HEAD
    path: "/contactcard",
    element: <ContactCard/>
  },
  {
    path: "/jobdetail",
    element: <JobDetailPage/>
=======
    path : "/admin-content",
    element : <AdminPanel/>
  },
  {
    path: "/error",
    element: <ErrorMessage/>,
>>>>>>> 5790adb (admin panel , profile page)
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
