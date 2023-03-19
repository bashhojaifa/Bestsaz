import React, { Fragment } from "react";

const ProductDetails = () => {
  return (
    <Fragment>
      <div>
        <div className="shop-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="tab-content quickview-big-img">
                  <div id="pro-1" className="tab-pane fade show active">
                    <img src="assets/img/product/quickview-l1.jpg" alt />
                  </div>
                  <div id="pro-2" className="tab-pane fade">
                    <img src="assets/img/product/quickview-l2.jpg" alt />
                  </div>
                  <div id="pro-3" className="tab-pane fade">
                    <img src="assets/img/product/quickview-l3.jpg" alt />
                  </div>
                  <div id="pro-4" className="tab-pane fade">
                    <img src="assets/img/product/quickview-l2.jpg" alt />
                  </div>
                </div>
                {/* Thumbnail Large Image End */}
                {/* Thumbnail Image End */}
                <div className="quickview-wrap mt-15">
                  <div
                    className="quickview-slide-active owl-carousel nav nav-style-1"
                    role="tablist"
                  >
                    <a className="active" data-bs-toggle="tab" href="#pro-1">
                      <img src="assets/img/product/quickview-s1.jpg" alt />
                    </a>
                    <a data-bs-toggle="tab" href="#pro-2">
                      <img src="assets/img/product/quickview-s2.jpg" alt />
                    </a>
                    <a data-bs-toggle="tab" href="#pro-3">
                      <img src="assets/img/product/quickview-s3.jpg" alt />
                    </a>
                    <a data-bs-toggle="tab" href="#pro-4">
                      <img src="assets/img/product/quickview-s2.jpg" alt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="product-details-content ml-70">
                  <h2>Products Name Here</h2>
                  <div className="product-details-price">
                    <span>$18.00 </span>
                    <span className="old">$20.00 </span>
                  </div>
                  <div className="pro-details-rating-wrap">
                    <div className="pro-details-rating">
                      <i className="fa fa-star-o yellow" />
                      <i className="fa fa-star-o yellow" />
                      <i className="fa fa-star-o yellow" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <span>
                      <a href="#">3 Reviews</a>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm
                    tempor incidid ut labore et dolore magna aliqua. Ut enim ad
                    minim venialo quis nostrud exercitation ullamco
                  </p>
                  <div className="pro-details-list">
                    <ul>
                      <li>- 0.5 mm Dail</li>
                      <li>- Inspired vector icons</li>
                      <li>- Very modern style</li>
                    </ul>
                  </div>
                  <div className="pro-details-size-color">
                    <div className="pro-details-color-wrap">
                      <span>Color</span>
                      <div className="pro-details-color-content">
                        <ul>
                          <li className="blue" />
                          <li className="maroon active" />
                          <li className="gray" />
                          <li className="green" />
                          <li className="yellow" />
                        </ul>
                      </div>
                    </div>
                    <div className="pro-details-size">
                      <span>Size</span>
                      <div className="pro-details-size-content">
                        <ul>
                          <li>
                            <a href="#">s</a>
                          </li>
                          <li>
                            <a href="#">m</a>
                          </li>
                          <li>
                            <a href="#">l</a>
                          </li>
                          <li>
                            <a href="#">xl</a>
                          </li>
                          <li>
                            <a href="#">xxl</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pro-details-quality">
                    <div className="cart-plus-minus">
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        name="qtybutton"
                        defaultValue={2}
                      />
                    </div>
                    <div className="pro-details-cart btn-hover">
                      <a href="#">Add To Cart</a>
                    </div>
                    <div className="pro-details-wishlist">
                      <a href="#">
                        <i className="fa fa-heart-o" />
                      </a>
                    </div>
                    <div className="pro-details-compare">
                      <a href="#">
                        <i className="pe-7s-shuffle" />
                      </a>
                    </div>
                  </div>
                  <div className="pro-details-meta">
                    <span>Categories :</span>
                    <ul>
                      <li>
                        <a href="#">Minimal,</a>
                      </li>
                      <li>
                        <a href="#">Furniture,</a>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                    </ul>
                  </div>
                  <div className="pro-details-meta">
                    <span>Tag :</span>
                    <ul>
                      <li>
                        <a href="#">Fashion, </a>
                      </li>
                      <li>
                        <a href="#">Furniture,</a>
                      </li>
                      <li>
                        <a href="#">Electronic</a>
                      </li>
                    </ul>
                  </div>
                  <div className="pro-details-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-review-area pb-90">
          <div className="container">
            <div className="description-review-wrapper">
              <div className="description-review-topbar nav">
                <a data-bs-toggle="tab" href="#des-details1">
                  Additional information
                </a>
                <a className="active" data-bs-toggle="tab" href="#des-details2">
                  Description
                </a>
                <a data-bs-toggle="tab" href="#des-details3">
                  Reviews (2)
                </a>
              </div>
              <div className="tab-content description-review-bottom">
                <div id="des-details2" className="tab-pane active">
                  <div className="product-description-wrapper">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <p>
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commo consequat. Duis aute irure dolor in reprehend
                      in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt{" "}
                    </p>
                  </div>
                </div>
                <div id="des-details1" className="tab-pane ">
                  <div className="product-anotherinfo-wrapper">
                    <ul>
                      <li>
                        <span>Weight</span> 400 g
                      </li>
                      <li>
                        <span>Dimensions</span>10 x 10 x 15 cm{" "}
                      </li>
                      <li>
                        <span>Materials</span> 60% cotton, 40% polyester
                      </li>
                      <li>
                        <span>Other Info</span> American heirloom jean shorts
                        pug seitan letterpress
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="des-details3" className="tab-pane">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="review-wrapper">
                        <div className="single-review">
                          <div className="review-img">
                            <img src="assets/img/testimonial/1.jpg" alt />
                          </div>
                          <div className="review-content">
                            <div className="review-top-wrap">
                              <div className="review-left">
                                <div className="review-name">
                                  <h4>White Lewis</h4>
                                </div>
                                <div className="review-rating">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                              </div>
                              <div className="review-left">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                            <div className="review-bottom">
                              <p>
                                Vestibulum ante ipsum primis aucibus orci
                                luctustrices posuere cubilia Curae Suspendisse
                                viverra ed viverra. Mauris ullarper euismod
                                vehicula. Phasellus quam nisi, congue id nulla.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="single-review child-review">
                          <div className="review-img">
                            <img src="assets/img/testimonial/2.jpg" alt />
                          </div>
                          <div className="review-content">
                            <div className="review-top-wrap">
                              <div className="review-left">
                                <div className="review-name">
                                  <h4>White Lewis</h4>
                                </div>
                                <div className="review-rating">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                              </div>
                              <div className="review-left">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                            <div className="review-bottom">
                              <p>
                                Vestibulum ante ipsum primis aucibus orci
                                luctustrices posuere cubilia Curae Sus pen disse
                                viverra ed viverra. Mauris ullarper euismod
                                vehicula.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="ratting-form-wrapper pl-50">
                        <h3>Add a Review</h3>
                        <div className="ratting-form">
                          <form action="#">
                            <div className="star-box">
                              <span>Your rating:</span>
                              <div className="ratting-star">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="rating-form-style mb-10">
                                  <input placeholder="Name" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="rating-form-style mb-10">
                                  <input placeholder="Email" type="email" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="rating-form-style form-submit">
                                  <textarea
                                    name="Your Review"
                                    placeholder="Message"
                                    defaultValue={""}
                                  />
                                  <input type="submit" defaultValue="Submit" />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related-product-area pb-95">
          <div className="container">
            <div className="section-title text-center mb-50">
              <h2>Related products</h2>
            </div>
            <div className="related-product-active owl-carousel owl-dot-none">
              <div className="product-wrap">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/pro-1.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/pro-1-1.jpg"
                      alt
                    />
                  </a>
                  <span className="pink">-10%</span>
                  <div className="product-action">
                    <div className="pro-same-action pro-wishlist">
                      <a title="Wishlist" href="#">
                        <i className="pe-7s-like" />
                      </a>
                    </div>
                    <div className="pro-same-action pro-cart">
                      <a title="Add To Cart" href="#">
                        <i className="pe-7s-cart" /> Add to cart
                      </a>
                    </div>
                    <div className="pro-same-action pro-quickview">
                      <a
                        title="Quick View"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="pe-7s-look" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-content text-center">
                  <h3>
                    <a href="product-details.html">T- Shirt And Jeans</a>
                  </h3>
                  <div className="product-rating">
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price">
                    <span>$ 60.00</span>
                    <span className="old">$ 60.00</span>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/pro-2.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/pro-2-1.jpg"
                      alt
                    />
                  </a>
                  <span className="purple">New</span>
                  <div className="product-action">
                    <div className="pro-same-action pro-wishlist">
                      <a title="Wishlist" href="#">
                        <i className="pe-7s-like" />
                      </a>
                    </div>
                    <div className="pro-same-action pro-cart">
                      <a title="Add To Cart" href="#">
                        <i className="pe-7s-cart" /> Add to cart
                      </a>
                    </div>
                    <div className="pro-same-action pro-quickview">
                      <a
                        title="Quick View"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="pe-7s-look" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-content text-center">
                  <h3>
                    <a href="product-details.html">T- Shirt And Jeans</a>
                  </h3>
                  <div className="product-rating">
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price">
                    <span>$ 60.00</span>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/pro-3.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/pro-3-1.jpg"
                      alt
                    />
                  </a>
                  <span className="pink">-10%</span>
                  <div className="product-action">
                    <div className="pro-same-action pro-wishlist">
                      <a title="Wishlist" href="#">
                        <i className="pe-7s-like" />
                      </a>
                    </div>
                    <div className="pro-same-action pro-cart">
                      <a title="Add To Cart" href="#">
                        <i className="pe-7s-cart" /> Add to cart
                      </a>
                    </div>
                    <div className="pro-same-action pro-quickview">
                      <a
                        title="Quick View"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="pe-7s-look" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-content text-center">
                  <h3>
                    <a href="product-details.html">T- Shirt And Jeans</a>
                  </h3>
                  <div className="product-rating">
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price">
                    <span>$ 60.00</span>
                    <span className="old">$ 60.00</span>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/pro-4.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/pro-4-1.jpg"
                      alt
                    />
                  </a>
                  <span className="purple">New</span>
                  <div className="product-action">
                    <div className="pro-same-action pro-wishlist">
                      <a title="Wishlist" href="#">
                        <i className="pe-7s-like" />
                      </a>
                    </div>
                    <div className="pro-same-action pro-cart">
                      <a title="Add To Cart" href="#">
                        <i className="pe-7s-cart" /> Add to cart
                      </a>
                    </div>
                    <div className="pro-same-action pro-quickview">
                      <a
                        title="Quick View"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="pe-7s-look" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-content text-center">
                  <h3>
                    <a href="product-details.html">T- Shirt And Jeans</a>
                  </h3>
                  <div className="product-rating">
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price">
                    <span>$ 60.00</span>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/pro-5.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/pro-5-1.jpg"
                      alt
                    />
                  </a>
                  <span className="pink">-10%</span>
                  <div className="product-action">
                    <div className="pro-same-action pro-wishlist">
                      <a title="Wishlist" href="#">
                        <i className="pe-7s-like" />
                      </a>
                    </div>
                    <div className="pro-same-action pro-cart">
                      <a title="Add To Cart" href="#">
                        <i className="pe-7s-cart" /> Add to cart
                      </a>
                    </div>
                    <div className="pro-same-action pro-quickview">
                      <a
                        title="Quick View"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="pe-7s-look" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-content text-center">
                  <h3>
                    <a href="product-details.html">T- Shirt And Jeans</a>
                  </h3>
                  <div className="product-rating">
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o yellow" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price">
                    <span>$ 60.00</span>
                    <span className="old">$ 60.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
