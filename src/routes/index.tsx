import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Home } from "../pages";
import { Layout } from "../components";

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
