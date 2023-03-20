//External Lib Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../components/Common/LazyLoader";
const Home = lazy(() => import("../screens/puclic/HomeScreen"));
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
    path: "productDetails",
    element: (
      <LazyLoading>
        <ProductDetails />
      </LazyLoading>
    ),
  },
  {
    path: "productListByCategory",
    element: (
      <LazyLoading>
        <ProductListByCategory />
      </LazyLoading>
    ),
  },
  {
    path: "productListBySubCategory",
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
    path: "search",
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
