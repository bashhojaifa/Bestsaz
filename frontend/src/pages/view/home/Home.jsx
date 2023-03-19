import React, { Fragment } from "react";
import FeatureIcon from "../fetureIcon/FeatureIcon";
import Product from "../product/HomeProduct";
import Layout from "../layout/Layout";
import Slider from "../slider/Slider";

const Home = () => {
  return (
    <Fragment>
      <Layout
      // headerTop="visible"
      >
        {/* slider */}
        <Slider />

        {/* featured icon */}
        <FeatureIcon />

        {/* product grid */}
        <Product />
      </Layout>
    </Fragment>
  );
};

export default Home;
