//External Lib Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../components/Common/LazyLoader";
const Cart = lazy(() => import("../screens/private/CartScreen"));
const Favourite = lazy(() => import("../screens/private/FavouriteScreen"));
const Order = lazy(() => import("../screens/private/OrderScreen"));
const UserOnboardPage = lazy(() =>
  import("../screens/private/UserOnboardPageScreen")
);

const LazyLoading = ({ children }) => {
  return <Suspense fallback={<LazyLoader />}>{children}</Suspense>;
};

const privateRoutes = [
  {
    path: "cart",
    element: (
      <LazyLoading>
        <Cart />
      </LazyLoading>
    ),
  },
  {
    path: "favourite",
    element: (
      <LazyLoading>
        <Favourite />
      </LazyLoading>
    ),
  },
  {
    path: "order",
    element: (
      <LazyLoading>
        <Order />
      </LazyLoading>
    ),
  },
  {
    path: "profile",
    element: (
      <LazyLoading>
        <UserOnboardPage />
      </LazyLoading>
    ),
  },
];

export default privateRoutes;
