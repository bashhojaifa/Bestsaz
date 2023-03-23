//External Lib Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../components/Common/LazyLoader";
const Home = lazy(() => import("../screens/puclic/HomeScreen"));
const Login = lazy(() => import("../screens/puclic/LoginScreen"));
const Register = lazy(() => import("../screens/puclic/RegisterScreen"));
const ResetPassword = lazy(() =>
  import("../screens/puclic/ResetPasswordScreen")
);
const ForgetPassword = lazy(() =>
  import("../screens/puclic/ForgetPasswordScreen")
);
const About = lazy(() => import("../screens/puclic/AboutScreen"));
const Contact = lazy(() => import("../screens/puclic/ContactScreen"));
const Notification = lazy(() => import("../screens/puclic/NotificationScreen"));
const Policy = lazy(() => import("../screens/puclic/PolicyScreen"));
const Terms = lazy(() => import("../screens/puclic/TermsScreen"));
const ProductDetails = lazy(() =>
  import("../screens/puclic/ProductDetailsScreen")
);
const ProductListByCategory = lazy(() =>
  import("../screens/puclic/ProductListByCategorySreen")
);
const ProductListBySubCategory = lazy(() =>
  import("../screens/puclic/ProductListBySubCategoryScreen")
);
const PurchasePage = lazy(() => import("../screens/puclic/PurchasePageScreen"));
const RefundPage = lazy(() => import("../screens/puclic/RefundPageScreen"));
const SearchResult = lazy(() => import("../screens/puclic/SearchResultScreen"));

const LazyLoading = ({ children }) => {
  return <Suspense fallback={<LazyLoader />}>{children}</Suspense>;
};

const publicRoutes = [
  {
    path: "/",
    element: (
      <LazyLoading>
        <Home />
      </LazyLoading>
    ),
  },
  {
    path: "/login",
    element: (
      <LazyLoading>
        <Login />
      </LazyLoading>
    ),
  },
  {
    path: "/forget",
    element: (
      <LazyLoading>
        <ForgetPassword />
      </LazyLoading>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <LazyLoading>
        <ResetPassword />
      </LazyLoading>
    ),
  },
  {
    path: "/register",
    element: (
      <LazyLoading>
        <Register />
      </LazyLoading>
    ),
  },
  {
    path: "/about",
    element: (
      <LazyLoading>
        <About />
      </LazyLoading>
    ),
  },
  {
    path: "contact",
    element: (
      <LazyLoading>
        <Contact />
      </LazyLoading>
    ),
  },
  {
    path: "notification",
    element: (
      <LazyLoading>
        <Notification />
      </LazyLoading>
    ),
  },
  {
    path: "policy",
    element: (
      <LazyLoading>
        <Policy />
      </LazyLoading>
    ),
  },
  {
    path: "terms",
    element: (
      <LazyLoading>
        <Terms />
      </LazyLoading>
    ),
  },
  {
    path: "product-details/:productCode",
    element: (
      <LazyLoading>
        <ProductDetails />
      </LazyLoading>
    ),
  },
  {
    path: "product-list-by-category/:category",
    element: (
      <LazyLoading>
        <ProductListByCategory />
      </LazyLoading>
    ),
  },
  {
    path: "product-list-by-sub-category/:category/:subCategory",
    element: (
      <LazyLoading>
        <ProductListBySubCategory />
      </LazyLoading>
    ),
  },
  {
    path: "purchase",
    element: (
      <LazyLoading>
        <PurchasePage />
      </LazyLoading>
    ),
  },
  {
    path: "refund",
    element: (
      <LazyLoading>
        <RefundPage />
      </LazyLoading>
    ),
  },
  {
    path: "search/:searchTerm",
    element: (
      <LazyLoading>
        <SearchResult />
      </LazyLoading>
    ),
  },
  {
    path: "*",
    element: (
      <LazyLoading>
        <></>
      </LazyLoading>
    ),
  },
];

export default publicRoutes;
