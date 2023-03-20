import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../../components/Common/NavMenuDesktop";
import NavMenuMobile from "../../components/Common/NavMenuMobile";
import FooterDesktop from "../../components/Common/FooterDesktop";
import FooterMobile from "../../components/Common/FooterMobile";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import SuggestedProducts from "../../components/ProductDetails/SuggestedProducts";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import SliderLoader from "../../components/Placeholder/SliderLoader";
import ProductReview from "../../components/ProductDetails/ProductReview";

class ProductDetailsScreen extends Component {
  constructor({ match }) {
    super();
    this.state = {
      code: match.params.code,
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(ApiURL.ProductDetails(this.state.code))
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            ProductData: response.data,
            isLoading: "d-none",
            mainDiv: "",
          });
        }
      })
      .catch((error) => {});
  }

  render() {
    if (this.state.isLoading === "d-none") {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenuDesktop />
          </div>

          <div className="Mobile">
            <NavMenuMobile />
          </div>
          <ProductDetails ProductData={this.state.ProductData} />
          <div className="Desktop">
            <FooterDesktop />
          </div>
          <div className="Mobile">
            <FooterMobile />
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
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
        </Fragment>
      );
    }
  }
}

export default ProductDetailsScreen;
