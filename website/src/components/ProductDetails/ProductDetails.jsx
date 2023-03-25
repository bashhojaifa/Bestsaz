//External Lib Import
import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

//Internal Lib Import
import htmlParser from "../../utils/htmlParser";
import ProductReview from "./ProductReview";
import SuggestedProducts from "./SuggestedProducts";

const ProductDetails = ({ productDetails }) => {
  const [innerImg, setInnerImg] = useState("");
  const { t } = useTranslation();
  const {
    category,
    subCategory,
    featuredImage,
    images,
    shortDescription,
    name,
    colors,
    sizes,
    discountPrice,
    price,
    longDescription,
    reviews,
  } = productDetails;

  const quantityOnChange = () => {};
  const addToCart = () => {};

  useEffect(() => {
    setInnerImg(featuredImage?.src);
  }, []);

  const contactValidation = yup.object({
    color: yup.string(),
    size: yup.string(),
    quantity: yup
      .number()
      .required(t("Quantity is required"))
      .min(1, t("quantity minimum 1")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      color: "",
      size: "",
      quantity: 1,
    },
    resolver: yupResolver(contactValidation),
  });

  /*
   * form handle submit
   */
  const submitForm = (values) => {
    alert(JSON.stringify(values));
    //contactCreate(values);
  };

  return (
    <>
      {" "}
      <Container fluid={true} className="TopSection onboardMargin mt-5 pt-5">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/product-list-by-category/${category}`}>{category}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to={`/product-list-by-sub-category/${category}/${subCategory}`}
            >
              {subCategory}
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
                      src={innerImg}
                      zoomSrc={innerImg}
                      zoomScale={1.8}
                      zoomType="hover"
                    />
                  </Col>
                  <Col sm={12} lg={12} md={12} xs={12} xl={12}>
                    <Container className="my-3">
                      <Row>
                        {images?.map((img) => (
                          <Col
                            className="p-0 m-0"
                            lg={3}
                            ms={3}
                            sm={6}
                            xs={6}
                            xl={3}
                          >
                            <img
                              onClick={(e) => setInnerImg(e.target.src)}
                              className="w-100 h-75"
                              src={img?.src}
                              alt="product-img"
                            />
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </Col>
                  <Col>
                    <h4 className="details-section-title">{name}</h4>
                    <p className="section-sub-title text-justify">
                      {htmlParser(longDescription)}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Form onReset={reset} onSubmit={handleSubmit(submitForm)}>
                  <Row>
                    <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                      <h4 className="details-section-title">{name}</h4>
                      <p className="section-sub-title">
                        {htmlParser(shortDescription)}
                      </p>

                      {discountPrice ? (
                        <span className="price-font font-weight-bolder">
                          <strike className="text-danger">
                            Before: {price} TK
                          </strike>
                          &emsp;After: {discountPrice} TK
                        </span>
                      ) : (
                        <span className="price-font font-weight-bolder">
                          Price: {price} TK
                        </span>
                      )}
                    </Col>

                    {colors?.length && (
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        <div className={"displaycolor"}>
                          <h4 className="details-section-title">
                            Choose Color
                          </h4>
                          <div className="input-group">
                            <div className="form-check mx-1">
                              {colors?.map((color) => (
                                <span>
                                  <input
                                    {...register("color")}
                                    className={`form-check-input ${
                                      errors.color ? "is-invalid" : ""
                                    }`}
                                    type="radio"
                                    name="color"
                                    id={color.value}
                                    value={color.value}
                                  />
                                  <label htmlFor={color.value}>
                                    {color.label}&emsp;&emsp;
                                  </label>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Col>
                    )}

                    {sizes?.length && (
                      <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                        <div className={"displaycolor"}>
                          <h4 className="details-section-title">Choose Size</h4>
                          <div className="input-group">
                            <div className="form-check mx-1">
                              {sizes?.map((size) => (
                                <span>
                                  <input
                                    {...register("size")}
                                    className={`form-check-input ${
                                      errors.size ? "is-invalid" : ""
                                    }`}
                                    type="radio"
                                    id={size.value}
                                  />
                                  <label htmlFor={size.value}>
                                    {size.label}&emsp;&emsp;
                                  </label>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Col>
                    )}

                    <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                      <h4 className="details-section-title">
                        <label htmlFor="quantity">Quantity</label>
                      </h4>
                      <input
                        {...register("quantity")}
                        className={`form-control text-center w-50 ${
                          errors.quantity ? "is-invalid" : ""
                        }`}
                        {...register("quantity")}
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
                      <Button onClick={addToCart} className="btn-danger mr-1">
                        <i className="fas fa-shopping-cart"></i> Add To Cart
                      </Button>
                      <Button className="mr-1" type="submit">
                        <i className="fas fa-car"></i> Order Now
                      </Button>
                      <Button className="mr-1">
                        <i className="fas fa-heart"></i> Favourite
                      </Button>
                    </Col>
                    <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                      <ProductReview reviews={reviews} />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <SuggestedProducts subCategory={subCategory} />
    </>
  );
};

export default ProductDetails;
