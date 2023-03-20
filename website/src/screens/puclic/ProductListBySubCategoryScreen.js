import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../../components/Common/NavMenuDesktop";
import NavMenuMobile from "../../components/Common/NavMenuMobile";
import FooterDesktop from "../../components/Common/FooterDesktop";
import FooterMobile from "../../components/Common/FooterMobile";
import ListBySubCategory from "../../components/ProductDetails/ListBySubCategory";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ProductListLoader from "../../components/Placeholder/ProductListLoader";

class ProductListBySubCategoryScreen extends Component {
  constructor({ match }) {
    super();
    this.state = {
      Category: match.params.Category,
      SubCategory: match.params.SubCategory,
      productData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(
        ApiURL.ProductListBySubCategory(
          this.state.Category,
          this.state.SubCategory
        )
      )
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            productData: response.data,
            isLoading: "d-none",
            mainDiv: "",
          });
        }
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <ProductListLoader isLoading={this.state.isLoading} />
        <div className="mainDiv">
          <ListBySubCategory
            SubCategory={this.state.SubCategory}
            Category={this.state.Category}
            productData={this.state.productData}
          />
        </div>
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
export default ProductListBySubCategoryScreen;
