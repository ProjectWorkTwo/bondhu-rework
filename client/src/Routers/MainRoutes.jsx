import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import GroupPage from "../Pages/GroupPage";
import SingleGroup from "../Pages/SingleGroup";
import PagePage from "../Pages/PagePage";
import SinglePage from "../Pages/SinglePage";
import Home from "../Pages/Home";
import SinglePost from "../Pages/SinglePost";
import SignUpPage from "../Pages/SignUpPage";
import LoginPage from "../Pages/LoginPage";
import ProfilePage from "../Pages/ProfilePage";

const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:userName",
          element: <ProfilePage />,
        },
        {
          path: "/groups",
          element: <GroupPage />,
        },
        {
          path: "/group/:groupName",
          element: <SingleGroup />,
        },
        {
          path: "/pages",
          element: <PagePage />,
        },
        {
          path: "/page/:pageName",
          element: <SinglePage />,
        },
        {
          path: "/post/:id",
          element: <SinglePost />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
