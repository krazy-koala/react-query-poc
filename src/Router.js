import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";
import About from "./About/About";
import AppRoot from "./AppRoot";

const router = createBrowserRouter([
  {
    element: <AppRoot />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/dashboard" />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
