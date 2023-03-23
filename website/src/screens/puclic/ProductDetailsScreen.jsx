//External Lib Import
import React from "react";

//Internal Lib Import
import { useProductDetailsQuery } from "../../redux/services/productService";
import SliderLoader from "../../components/Placeholder/SliderLoader";
import NavMenuDesktop from "../../components/Common/NavMenuDesktop";
import NavMenuMobile from "../../components/Common/NavMenuMobile";
import FooterDesktop from "../../components/Common/FooterDesktop";
import FooterMobile from "../../components/Common/FooterMobile";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const ProductDetailsScreen = () => {
  const { data: productDetails } = useProductDetailsQuery("featured");

  if (!productDetails?.length > 0) {
    return (
      <>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <SliderLoader />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>
      <ProductDetails productDetails={productDetails} />
      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default ProductDetailsScreen;
