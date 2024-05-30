import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import SignUp from "../pages/sign-up";
import Profile from "../pages/profile";
import NavBar from "../components/navbar";
import MyPost from "../pages/my-post";
import CreatePost from "../pages/create-post";
import UpdatePost from "../pages/update-post";
import PostDetail from "../pages/post-detail";
import UpdateBlogger from "../pages/update-blogger";
import CreateBlogger from "../pages/create-blogger";
import Blogger from "../pages/blogger";
import BloggerDetail from "../pages/blogger-detail";
import WaitingArticles from "../pages/waiting-articles";

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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/navbar",
    element: <NavBar />,
  },
  {
    path: "/login/post",
    element: <MyPost />,
  },
  {
    path: "/create",
    element: <CreatePost />,
  },
  {
    path: "/update",
    element: <UpdatePost />,
  },
  {
    path: "/detail/:id",
    element: <PostDetail />,
  },
  {
    path: "/add",
    element: <CreateBlogger />,
  },
  {
    path: "/update/blogger/:id",
    element: <UpdateBlogger />,
  },
  {
    path: "/blogger",
    element: <Blogger />,
  },
  {
    path: "/blogger/detail/:id",
    element: <BloggerDetail />,
  },
  {
    path: "/articles",
    element: <WaitingArticles />,
  },
]);
