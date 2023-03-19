//External Lib Import
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserId } from "../../helper/helper";
import { useUserProfileQuery } from "../../store/services/profileServices";

//Internal Lib Import
import publicRoutes from "../PublicRoutes";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("bestSaz-token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  } else {
    return children;
  }
};

const getPublicRoute = () => {
  const filterRoute = [];
  publicRoutes.map((route) => {
    route.element = <PublicRoute>{route.element}</PublicRoute>;
    filterRoute.push(route);
  });

  return filterRoute;
};

export default getPublicRoute;
