import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Home, ProjectDetail } from "../pages";
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
        {
          path: "/project/:projectName",
          element: <ProjectDetail />,
        },
      ],
    },
  ]);
};

export default Routes;
