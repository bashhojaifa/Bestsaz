import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../../components/Common/NavMenuDesktop";
import NavMenuMobile from "../../components/Common/NavMenuMobile";
import Contact from "../../components/Common/Contact";
import FooterDesktop from "../../components/Common/FooterDesktop";
import FooterMobile from "../../components/Common/FooterMobile";
import Search from "../../components/SearchApi/Search";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class SearchResultScreen extends Component {
  constructor({ match }) {
    super();
    this.state = {
      SearchKey: match.params.key,
      Products: [],
    };
  }

  componentDidMount() {
    axios
      .get(ApiURL.ProductSearch(this.state.SearchKey))
      .then((response) => {
        if (response.status == 200) {
          this.setState({ Products: response.data });
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

        <Search Products={this.state.Products} params={this.state.SearchKey} />

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

export default SearchResultScreen;
