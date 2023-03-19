import PropTypes from "prop-types";
import { Fragment } from "react";
import ScrollToTop from "../scroll-to-top";
import Footer from "./Footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* header */}
      <Header />

      {children}

      {/* footer */}
      <Footer />

      {/* scroll to top */}
      <ScrollToTop />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
