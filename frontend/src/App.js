import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Layout from "./components/admin/layout/Layout";
import Orders from "./pages/admin/orders/Orders";
import Customers from "./pages/admin/customers/Customers";
import Categories from "./pages/admin/category/Categories";
import Products from "./pages/admin/product/Products";
import SubCategories from "./pages/admin/subCategory/SubCategories";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <Routes />
      {/* <FullScreenLoader />
    <Toaster /> */}
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/forgot-password" element={<ForgotPassword />} />
    //     <Route path="/admin" element={<Layout />}>
    //       <Route index element={<Dashboard />} />
    //       <Route path="orders" element={<Orders />} />
    //       <Route path="customers" element={<Customers />} />
    //       <Route path="category" element={<Categories />} />
    //       <Route path="sub-category" element={<SubCategories />} />
    //       <Route path="products" element={<Products />} />
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
