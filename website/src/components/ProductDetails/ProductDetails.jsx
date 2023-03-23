import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Card, Breadcrumb } from "react-bootstrap";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "html-react-parser";
import SuggestedProducts from "./SuggestedProducts";
import { Link } from "react-router-dom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import ProductReview from "./ProductReview";
import SessionHelper from "../SessionHelper/SessionHelper";
import cogoToast from "cogo-toast";
import ApiURL from "../../api/ApiURL";
import axios from "axios";

class ProductDetails extends Component {
  constructor(props) {
    window.scroll(0, 0);
    super(props);
    this.state = {
      isSize: null,
      isColor: null,
      image: "0",
      color: "",
      size: "",
      quantity: "",
      productCode: "",
      isLoggedIn: SessionHelper.getSession("phone"),
      pageRefresh: false,
    };
  }

  setOnClick = (event) => {
    let att = event.target.getAttribute("src");
    this.setState({ image: att });
  };
  colorOnChange = (e) => {
    this.setState({ color: e.target.value });
  };
  sizeOnChange = (e) => {
    this.setState({ size: e.target.value });
  };
  quantityOnChange = (e) => {
    this.setState({ quantity: e.target.value });
  };
  // isLogged = () => {
  //     if (SessionHelper.getSession("phone")) {
  //         this.setState({isLoggedIn: true});
  //     }
  // }

  addToCart = (e) => {
    if (this.state.isLoggedIn != null) {
      let isSize = this.state.isSize;
      let isColor = this.state.isColor;
      let productCode = this.state.productCode;
      let color = this.state.color;
      let size = this.state.size;
      let quantity = this.state.quantity;
      let phone = SessionHelper.getSession("phone");

      if (isColor == "YES" && color.length == 0) {
        cogoToast.warn("Please select a color!");
      } else if (isSize == "YES" && size.length == 0) {
        cogoToast.warn("Please select a size!");
      } else if (quantity == "") {
        cogoToast.warn("Please enter quantity!");
      } else {
        let formData = new FormData();
        formData.append("color", color);
        formData.append("size", size);
        formData.append("quantity", quantity);
        formData.append("phone", phone);
        formData.append("product_code", productCode);
        let config = {
          "Content-Type": "multipart/form-data",
        };
        console.log(this.state.productCode);
        axios
          .post(ApiURL.AddToCart, formData, config)
          .then((response) => {
            if (response.data === 1) {
              cogoToast.success("Item Added Successfully!");
              this.setState({ pageRefresh: true });
            } else {
              cogoToast.error("Item Failed To Add!");
            }
          })
          .catch((err) => {
            // cogoToast.error("Server Error!");
          });
      }
    } else {
      cogoToast.warn("Login First");
      SessionHelper.setSession("productCode", this.state.productCode);
    }
  };
  pageRefresh = () => {
    if (this.state.pageRefresh === true) {
      let url = window.location;
      return "";
    }
  };

  render() {
    let data = this.props.ProductData;
    let title = data["productList"][0]["title"];
    let brand = data["productList"][0]["brand"];
    let category = data["productList"][0]["category"];
    let discount_price = data["productList"][0]["discount_price"];
    let main_image = data["productList"][0]["image"];
    if (this.state.image == "0") {
      this.setState({ image: main_image });
    }
    let price = data["productList"][0]["price"];
    let remark = data["productList"][0]["remark"];
    let special_price = data["productList"][0]["special_price"];
    let star = data["productList"][0]["star"];
    let subcategory = data["productList"][0]["subcategory"];
    let des = data["productCode"][0]["des"];
    let details = data["productCode"][0]["details"];
    let img1 = data["productCode"][0]["img1"];
    let img2 = data["productCode"][0]["img2"];
    let img3 = data["productCode"][0]["img3"];
    let img4 = data["productCode"][0]["img4"];
    let size = data["productCode"][0]["size"];
    let product_code = data["productCode"][0]["product_code"];
    if (this.state.productCode == "") {
      this.setState({ productCode: product_code });
    }
    //
    let sizes = "";
    let color = data["productCode"][0]["color"];
    var displaysize = "d-none";

    if (!size.length == 0) {
      let splt = size.split(",");
      sizes = splt.map((size, i) => {
        return (
          <span>
            <input
              onChange={this.sizeOnChange}
              className="form-check-input"
              type="radio"
              name="sizes"
              id={size + i.toString()}
              value={size}
            />
            {size}&emsp;&emsp;
          </span>
        );
      });
      displaysize = "";
    }

    var displaycolor = "d-none";
    let colors = "";
    if (!color.length == 0) {
      let colorSplit = color.split(",");
      colors = colorSplit.map((color, i) => {
        return (
          <span>
            <input
              onChange={this.colorOnChange}
              className="form-check-input"
              type="radio"
              name="colors"
              id={color + i.toString()}
              value={color}
            />
            {color}&emsp;&emsp;
          </span>
        );
      });
      displaycolor = "";
    }
    if (this.state.isSize === null) {
      if (size !== "NA") {
        this.setState({ isSize: "YES" });
      } else {
        this.setState({ isSize: "NO" });
      }
    }
    if (this.state.isColor === null) {
      if (color !== "NA") {
        this.setState({ isColor: "YES" });
      } else {
        this.setState({ isColor: "NO" });
      }
    }
    if (discount_price == "NA") {
      return (
        <Fragment>
          <Container
            fluid={true}
            className="TopSection onboardMargin mt-5 pt-5"
          >
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={"/"}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={"/product-list-by-category/" + category}>
                  {category}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link
                  to={
                    "/ProductListBySubCategory/" + category + "/" + subcategory
                  }
                >
                  {subcategory}
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col lg={12} md={12} xl={12} sm={12} xs={12}>
                <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <Row>
                      <Col sm={12} lg={12} md={12} xs={12} xl={12}>
                        <InnerImageZoom
                          className="main-image"
                          src={this.state.image}
                          zoomSrc={main_image}
                          zoomScale={1.8}
                          zoomType="hover"
                        />
                      </Col>
                      <Col sm={12} lg={12} md={12} xs={12} xl={12}>
                        <Container className="my-3">
                          <Row>
                            <Col
                              className="p-0 m-0"
                              lg={3}
                              ms={3}
                              sm={6}
                              xs={6}
                              xl={3}
                            >
                              <img
                                onClick={this.setOnClick}
                                className="w-100 h-75"
                                height=""
                                src={img1}
                                alt=""
                              />
                            </Col>
                            <Col
                              className="p-0 m-0"
                              lg={3}
                              ms={3}
                              sm={6}
                              xs={6}
                              xl={3}
                            >
                              <img
                                onClick={this.setOnClick}
                                className="w-100 h-75"
                                src={img2}
                                alt=""
                              />
                            </Col>
                            <Col
                              className="p-0 m-0"
                              lg={3}
                              ms={3}
                              sm={6}
                              xs={6}
                              xl={3}
                            >
                              <img
                                onClick={this.setOnClick}
                                className="w-100 h-75"
                                src={img3}
                                alt=""
                              />
                            </Col>
                            <Col
                              className="p-0 m-0"
                              lg={3}
                              ms={3}
                              sm={6}
                              xs={6}
                              xl={3}
                            >
                              <img
                                onClick={this.setOnClick}
                                className="w-100 h-75"
                                src={img4}
                                alt=""
                              />
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                      <Col>
                        <h4 className="details-section-title">{title}</h4>
                        <p className="section-sub-title text-justify">
                          {ReactHtmlParser(details)}
                        </p>
                        {/*<p className="section-sub-title text-justify">{details}</p>*/}
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <Row>
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        {/*<h4 className="details-section-title">{title}</h4>*/}
                        <p className="section-sub-title">{des}</p>
                        <span className="price-font font-weight-bolder">
                          <strike className="text-danger">
                            Before: {price} TK
                          </strike>
                          &emsp;After: {discount_price} TK
                        </span>
                      </Col>
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        <div className={displaycolor}>
                          <h4 className="details-section-title">
                            Choose Color
                          </h4>
                          <div className="input-group">
                            <div className="form-check mx-1">{colors}</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        <div className={displaysize}>
                          <h4 className="details-section-title">Choose Size</h4>
                          <div className="input-group">
                            <div className="form-check mx-1">{sizes}</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        <h4 className="details-section-title">Quantity</h4>
                        <input
                          onChange={this.quantityOnChange}
                          className="form-control text-center w-50"
                          type="number"
                          min="1"
                        />
                      </Col>
                      <Col
                        className="my-3"
                        xs={12}
                        xl={12}
                        lg={12}
                        sm={12}
                        md={12}
                      >
                        <Button
                          onClick={this.addToCart}
                          className="btn-danger mr-1"
                        >
                          <i className="fas fa-shopping-cart"></i> Add To Cart
                        </Button>
                        <Button className="mr-1">
                          {" "}
                          <i className="fas fa-car"></i> Order Now
                        </Button>
                        <Button className="mr-1">
                          {" "}
                          <i className="fas fa-heart"></i> Favourite
                        </Button>
                      </Col>
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        <ProductReview code={product_code} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <SuggestedProducts subcategory={subcategory} />
          {this.pageRefresh()}
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Container
            fluid={true}
            className="TopSection onboardMargin mt-5 pt-5"
          >
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={"/"}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={"/product-list-by-category/" + category}>
                  {category}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link
                  to={
                    "/ProductListBySubCategory/" + category + "/" + subcategory
                  }
                >
                  {subcategory}
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col lg={12} md={12} xl={12} sm={12} xs={12}>
                <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <Row>
                      <Col sm={12} lg={12} md={12} xs={12} xl={12}>
                        <InnerImageZoom
                          className="main-image"
                          src={this.state.image}
                          zoomSrc={this.state.image}
                          zoomScale={1.8}
                          zoomType="hover"
                        />
                      </Col>
                      <Col sm={12} lg={12} md={12} xs={12} xl={12}>
                        <Container className="my-3">
                          <Row>
                            <Col
                              className="p-0 m-0"
                              lg={3}
                              ms={3}
                              sm={6}
                              xs={6}
                              xl={3}
                            >
                              <img
                                onClick={this.setOnClick}
                                className="w-100 h-75"
                                height=""
                                src={img1}
                                alt=""
                              />
                            </Col>
                            <Col
                              className="p-0 m-0"
                              lg={3}
                              ms={3}
                              sm={6}
                              xs={6}
                              xl={3}
                            >
                              <img
                                onClick={this.setOnClick}
                                className="w-100 h-75"
                                src={img2}
                                alt=""
                              />
                            </Col>
                            <Col
                              className="p-0 m-0"
                              lg={3}
                              ms={3}
                              sm={6}
                              xs={6}
                              xl={3}
                            >
                              <img
                                onClick={this.setOnClick}
                                className="w-100 h-75"
                                src={img3}
                                alt=""
                              />
                            </Col>
                            <Col
                              className="p-0 m-0"
                              lg={3}
                              ms={3}
                              sm={6}
                              xs={6}
                              xl={3}
                            >
                              <img
                                onClick={this.setOnClick}
                                className="w-100 h-75"
                                src={img4}
                                alt=""
                              />
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                      <Col>
                        <h4 className="details-section-title">{title}</h4>
                        <p className="section-sub-title text-justify">
                          {ReactHtmlParser(details)}
                        </p>
                        {/*<p className="section-sub-title text-justify">{details}</p>*/}
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <Row>
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        {/*<h4 className="details-section-title">{title}</h4>*/}
                        <p className="section-sub-title">{des}</p>
                        <span className="price-font font-weight-bolder">
                          <strike className="text-danger">
                            Before: {price} TK
                          </strike>
                          &emsp;After: {discount_price} TK
                        </span>
                      </Col>
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        <div className={displaycolor}>
                          <h4 className="details-section-title">
                            Choose Color
                          </h4>
                          <div className="input-group">
                            <div className="form-check mx-1">{colors}</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        <div className={displaysize}>
                          <h4 className="details-section-title">Choose Size</h4>
                          <div className="input-group">
                            <div className="form-check mx-1">{sizes}</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        <h4 className="details-section-title">Quantity</h4>
                        <input
                          onChange={this.quantityOnChange}
                          className="form-control text-center w-50"
                          type="number"
                          min="1"
                        />
                      </Col>
                      <Col
                        className="my-3"
                        xs={12}
                        xl={12}
                        lg={12}
                        sm={12}
                        md={12}
                      >
                        <Button
                          onClick={this.addToCart}
                          className="btn-danger mr-1"
                        >
                          <i className="fas fa-shopping-cart"></i> Add To Cart
                        </Button>
                        <Button className="mr-1">
                          {" "}
                          <i className="fas fa-car"></i> Order Now
                        </Button>
                        <Button className="mr-1">
                          {" "}
                          <i className="fas fa-heart"></i> Favourite
                        </Button>
                      </Col>
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        <ProductReview code={product_code} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <SuggestedProducts subcategory={subcategory} />
          {this.pageRefresh()}
        </Fragment>
      );
    }
  }
}

export default ProductDetails;
