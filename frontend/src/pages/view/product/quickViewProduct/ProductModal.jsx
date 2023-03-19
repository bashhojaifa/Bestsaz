import React from "react";

const ProductModal = () => {
  return (
    <div className="modal fade" id="quickViewProduct" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
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
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-details-content quickview-content">
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
                    <span>3 Reviews</span>
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
                          <li className="white" />
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
                        <a href="#">Electronic</a>
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
      </div>
    </div>
  );
};

export default ProductModal;
