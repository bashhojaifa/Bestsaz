//Internal Lib Import

import Dashboard from "../pages/admin/dashboard/Dashboard";
import Customers from "../pages/admin/customers/Customers";
import Orders from "../pages/admin/orders/Orders";
import Categories from "../pages/admin/category/Categories";
import SubCategories from "../pages/admin/subCategory/SubCategories";
// import Products from "../pages/admin/product/Products";
import React, { Suspense, lazy } from "react";
import HomeSlider from "../pages/admin/homeSlider/HomeSlider";

const ProductsPage = lazy(() => import("../pages/admin/product/Products"));

const LazyLoad = ({ children }) => (
  <Suspense fallback={<h1>l.....</h1>}>{children}</Suspense>
);

const privateRoutes = [
  {
    path: "dashboard",
    element: <Dashboard />,
    roles: ["admin"],
  },
  {
    path: "customers",
    element: <Customers />,
    roles: ["admin"],
  },
  {
    path: "products",
    element: (
      <LazyLoad>
        <ProductsPage />
      </LazyLoad>
    ),
    roles: ["admin"],
  },
  {
    path: "category",
    element: <Categories />,
    roles: ["admin"],
  },
  {
    path: "sub-category",
    element: <SubCategories />,
    roles: ["admin"],
  },
  {
    path: "orders",
    element: <Orders />,
    roles: ["admin"],
  },
  {
    path: "home-slider",
    element: <HomeSlider />,
    roles: ["admin"],
  },
];

export default privateRoutes;
