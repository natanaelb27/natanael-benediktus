import { Navigate, Outlet, useRoutes } from "react-router-dom";
import Layout from "../components/Layout";
import { Home } from "../pages";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
};

export default Routes;
