//Internal Lib Import
// import Login from "../pages/Authentication/Login.jsx";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Contact from "../pages/view/contact/Contact";
import Home from "../pages/view/home/Home";
import ProductDetails from "../pages/view/product/productDetails/ProductDetails";

const publicRoutes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "product-details",
    element: <ProductDetails />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
];

export default publicRoutes;
