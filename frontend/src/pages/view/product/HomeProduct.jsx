import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductModal from "./quickViewProduct/ProductModal";

const HomeProduct = () => {
  return (
    <Fragment>
      <div className="product-area pb-60 section-padding-1">
        <div className="container-fluid">
          <div className="section-title-2 text-center mb-60">
            <h2>New Arrival</h2>
            <p>Lorem ipsum dolor sit amet conse ctetu.</p>
          </div>
          <div className="custom-row">
            <div className="custom-col-5">
              <div className="product-wrap-2 mb-25 scroll-zoom">
                <div className="product-img">
                  <Link to={"/product-details"}>
                    <img
                      className="default-img"
                      src="assets/img/product/hm3-pro-1.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/hm3-pro-1.jpg"
                      alt
                    />
                  </Link>
                  <span className="pink">-10%</span>
                  <div className="product-action-2">
                    <a title="Add To Cart" href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a
                      title="Quick View"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewProduct"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a title="Compare" href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </div>
                </div>
                <div className="product-content-2">
                  <div className="title-price-wrap-2">
                    <h3>
                      <a href="product-details.html">Sheep Wool Sweater</a>
                    </h3>
                    <div className="price-2">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                  <div className="pro-wishlist-2">
                    <a title="Wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="product-wrap-2 mb-25 scroll-zoom">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/hm3-pro-2.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/hm3-pro-2.jpg"
                      alt
                    />
                  </a>
                  <span className="purple">New</span>
                  <div className="product-action-2">
                    <a title="Add To Cart" href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a
                      title="Quick View"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewProduct"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a title="Compare" href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </div>
                </div>
                <div className="product-content-2">
                  <div className="title-price-wrap-2">
                    <h3>
                      <a href="product-details.html">Gray Backpack</a>
                    </h3>
                    <div className="price-2">
                      <span>$ 70.00</span>
                    </div>
                  </div>
                  <div className="pro-wishlist-2">
                    <a title="Wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="product-wrap-2 mb-25 scroll-zoom">
                <div className="product-img">
                  <Link to={"/product-details"}>
                    <img
                      className="default-img"
                      src="assets/img/product/hm3-pro-3.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/hm3-pro-3.jpg"
                      alt
                    />
                  </Link>
                  <span className="pink">-10%</span>
                  <div className="product-action-2">
                    <a title="Add To Cart" href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a
                      title="Quick View"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewProduct"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a title="Compare" href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </div>
                </div>
                <div className="product-content-2">
                  <div className="title-price-wrap-2">
                    <h3>
                      <a href="product-details.html">Optical Instrument</a>
                    </h3>
                    <div className="price-2">
                      <span>$ 40.00</span>
                      <span className="old">$ 50.00</span>
                    </div>
                  </div>
                  <div className="pro-wishlist-2">
                    <a title="Wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="product-wrap-2 mb-25 scroll-zoom">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/hm3-pro-4.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/hm3-pro-4.jpg"
                      alt
                    />
                  </a>
                  <span className="purple">New</span>
                  <div className="product-action-2">
                    <a title="Add To Cart" href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a
                      title="Quick View"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewProduct"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a title="Compare" href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </div>
                </div>
                <div className="product-content-2">
                  <div className="title-price-wrap-2">
                    <h3>
                      <a href="product-details.html">Panama Hat</a>
                    </h3>
                    <div className="price-2">
                      <span>$ 80.00</span>
                    </div>
                  </div>
                  <div className="pro-wishlist-2">
                    <a title="Wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="product-wrap-2 mb-25 scroll-zoom">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/hm3-pro-5.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/hm3-pro-5.jpg"
                      alt
                    />
                  </a>
                  <span className="pink">-10%</span>
                  <div className="product-action-2">
                    <a title="Add To Cart" href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a
                      title="Quick View"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewProduct"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a title="Compare" href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </div>
                </div>
                <div className="product-content-2">
                  <div className="title-price-wrap-2">
                    <h3>
                      <a href="product-details.html">Timex Watch</a>
                    </h3>
                    <div className="price-2">
                      <span>$ 30.00</span>
                      <span className="old">$ 40.00</span>
                    </div>
                  </div>
                  <div className="pro-wishlist-2">
                    <a title="Wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="product-wrap-2 mb-25 scroll-zoom">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/hm3-pro-6.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/hm3-pro-6.jpg"
                      alt
                    />
                  </a>
                  <span className="purple">New</span>
                  <div className="product-action-2">
                    <a title="Add To Cart" href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a
                      title="Quick View"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewProduct"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a title="Compare" href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </div>
                </div>
                <div className="product-content-2">
                  <div className="title-price-wrap-2">
                    <h3>
                      <a href="product-details.html">Waist Belt</a>
                    </h3>
                    <div className="price-2">
                      <span>$ 90.00</span>
                    </div>
                  </div>
                  <div className="pro-wishlist-2">
                    <a title="Wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="product-wrap-2 mb-25 scroll-zoom">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/hm3-pro-7.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/hm3-pro-7.jpg"
                      alt
                    />
                  </a>
                  <span className="pink">-10%</span>
                  <div className="product-action-2">
                    <a title="Add To Cart" href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a
                      title="Quick View"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewProduct"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a title="Compare" href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </div>
                </div>
                <div className="product-content-2">
                  <div className="title-price-wrap-2">
                    <h3>
                      <a href="product-details.html">Puma Shoes For Men</a>
                    </h3>
                    <div className="price-2">
                      <span>$ 20.00</span>
                      <span className="old">$ 30.00</span>
                    </div>
                  </div>
                  <div className="pro-wishlist-2">
                    <a title="Wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="product-wrap-2 mb-25 scroll-zoom">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/hm3-pro-8.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/hm3-pro-8.jpg"
                      alt
                    />
                  </a>
                  <span className="purple">New</span>
                  <div className="product-action-2">
                    <a title="Add To Cart" href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a
                      title="Quick View"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewProduct"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a title="Compare" href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </div>
                </div>
                <div className="product-content-2">
                  <div className="title-price-wrap-2">
                    <h3>
                      <a href="product-details.html">Jeans For Men</a>
                    </h3>
                    <div className="price-2">
                      <span>$ 50.00</span>
                    </div>
                  </div>
                  <div className="pro-wishlist-2">
                    <a title="Wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="product-wrap-2 mb-25 scroll-zoom">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/hm3-pro-9.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/hm3-pro-9.jpg"
                      alt
                    />
                  </a>
                  <span className="purple">New</span>
                  <div className="product-action-2">
                    <a title="Add To Cart" href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a
                      title="Quick View"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewProduct"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a title="Compare" href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </div>
                </div>
                <div className="product-content-2">
                  <div className="title-price-wrap-2">
                    <h3>
                      <a href="product-details.html">Wireless Headphone</a>
                    </h3>
                    <div className="price-2">
                      <span>$ 50.00</span>
                    </div>
                  </div>
                  <div className="pro-wishlist-2">
                    <a title="Wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="product-wrap-2 mb-25 scroll-zoom">
                <div className="product-img">
                  <a href="product-details.html">
                    <img
                      className="default-img"
                      src="assets/img/product/hm3-pro-10.jpg"
                      alt
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/hm3-pro-10.jpg"
                      alt
                    />
                  </a>
                  <span className="purple">New</span>
                  <div className="product-action-2">
                    <a title="Add To Cart" href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a
                      title="Quick View"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewProduct"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a title="Compare" href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </div>
                </div>
                <div className="product-content-2">
                  <div className="title-price-wrap-2">
                    <h3>
                      <a href="product-details.html">Sports Shoes</a>
                    </h3>
                    <div className="price-2">
                      <span>$ 50.00</span>
                    </div>
                  </div>
                  <div className="pro-wishlist-2">
                    <a title="Wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductModal />
    </Fragment>
  );
};

export default HomeProduct;
