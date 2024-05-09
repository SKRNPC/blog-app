import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import SignUp from "../pages/sign-up";
import Profile from "../pages/profile";
import NavBar from "../components/navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/:id",
    element: <Profile />,
  },
  {
    path: "/navbar",
    element: <NavBar />,
  },
]);
