//External Lib Import
import { useEffect, useState } from "react";
import { Outlet, useRoutes } from "react-router-dom";

//Internal Lib Import
import getProtectRoute from "./middleware/ProtectRoute";
import getPublicRoute from "./middleware/PublicRoute";
import Error from "../pages/Error.jsx";
import AdminLayout from "../components/admin/layout/Layout";

const Routes = () => {
  const [allRoute, setAllRoute] = useState(getPublicRoute());

  useEffect(() => {
    setAllRoute([...getProtectRoute(), ...allRoute]);
  }, []);

  return useRoutes([
    {
      path: "/",
      element: <AdminLayout />,
      children: getProtectRoute(),
    },
    {
      path: "/",
      element: (
        <>
          <Outlet />
        </>
      ),
      children: getPublicRoute(),
    },
    { path: "*", element: <Error /> },
  ]);

  // return useRoutes([...allRoute, { path: "*", element: <Error /> }]);
};

export default Routes;
