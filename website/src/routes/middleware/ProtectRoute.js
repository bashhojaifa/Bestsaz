//Externl Lib Import
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//Internl Lib Import
import privateRoutes from "../privateRoute";

const ProtectRoute = ({ r, children }) => {
  const { accessToken, userDetails } = useSelector(
    (state) => state.authReducer
  );

  if (accessToken) {
    if (userDetails?.role !== "proprietor") {
      if (
        r.roles.indexOf(userDetails?.role) === -1 &&
        !r.roles.includes("all")
      ) {
        return <Navigate to="/not-access" replace />;
      }
      return children;
    }
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

const getProtectRoute = () => {
  const filterRoute = [];
  privateRoutes.map((r) => {
    r.element = <ProtectRoute r={r}> {r.element} </ProtectRoute>;
    filterRoute.push(r);
  });

  return filterRoute;
};

export default getProtectRoute;
