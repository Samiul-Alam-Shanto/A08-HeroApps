import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import MyInstallation from "../Pages/MyInstallation";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
      },
      {
        path: "/installation",
        Component: MyInstallation,
      },
    ],
  },
]);

export default router;
