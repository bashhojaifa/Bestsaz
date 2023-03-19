//External Lib Import
import { Navigate } from "react-router-dom";
import { getUserId } from "../../helper/helper";
import { useUserProfileQuery } from "../../store/services/profileServices";

//Internal Lib Import
import privateRoutes from "../PrivateRoutes";

const ProtectRoute = ({ route, children }) => {
  const token = localStorage.getItem("bestSaz-token");

  const userId = getUserId();
  const { data } = useUserProfileQuery(userId);

  if (token) {
    if (data) {
      if (route.roles.indexOf(data.role) === -1) {
        return <Navigate to="not-access" replace />;
      } else {
        return children;
      }
    }
  } else {
    return <Navigate to="/login" replace />;
  }
};

const getProtectRoute = () => {
  const filterRoute = [];
  privateRoutes.map((route) => {
    route.element = (
      <ProtectRoute route={route}> {route.element} </ProtectRoute>
    );
    filterRoute.push(route);
  });

  return filterRoute;
};

export default getProtectRoute;
