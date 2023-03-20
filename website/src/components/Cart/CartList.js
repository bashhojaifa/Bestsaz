import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import SessionHelper from "../SessionHelper/SessionHelper";
import cogoToast from "cogo-toast";

class CartList extends Component {
  constructor() {
    super();
    this.state = {
      CartData: [],
      CartCount: [],
      CartTotalPrice: "",
      CartDeleteId: "",
      RemoveStatus: false,
      OnAddRefresh: false,
      OnDeleteRefresh: false,
    };
  }

  componentDidMount() {
    axios
      .get(ApiURL.GetCartList(SessionHelper.getSession("phone")))
      .then((response) => {
        if (response.status == 200) {
          this.setState({ CartData: response.data });
        }
      })
      .catch();
    axios
      .get(ApiURL.CountPriceItem(SessionHelper.getSession("phone")))
      .then((response) => {
        if (response.status == 200) {
          this.setState({ CartCount: response.data });
        }
      })
      .catch();
    axios
      .get(ApiURL.CountTotalPrice(SessionHelper.getSession("phone")))
      .then((response) => {
        if (response.status == 200) {
          this.setState({ CartTotalPrice: response.data });
        }
      })
      .catch();
  }

  onDelete = (e) => {
    let id = e.target.getAttribute("data-id");
    axios
      .post(ApiURL.DeleteItem(id))
      .then((response) => {
        if (response.status == 200 && response.data == 1) {
          {
            this.setState({ RemoveStatus: true });
          }
          cogoToast.success("Item Successfully Removed!");
        } else {
          cogoToast.error("Error!");
        }
      })
      .catch();
  };
  DeleteRefresh = () => {
    if (this.state.RemoveStatus === true) {
      return;
    }
  };
  onAdd = (e) => {
    let id = e.target.getAttribute("data-id");
    let quantity = e.target.getAttribute("data-quantity");
    let unit = e.target.getAttribute("data-unit");
    let newQuantity = parseInt(quantity) + 1;
    let newTotal = unit * newQuantity;
    let formData = new FormData();
    formData.append("id", id);
    formData.append("newQuantity", newQuantity);
    formData.append("newTotal", newTotal);

    axios
      .post(ApiURL.onAdd, formData)
      .then((response) => {
        if (response.data == 1) {
          this.setState({ OnAddRefresh: true });
        }
      })
      .catch();
  };
  onSubtract = (e) => {
    let id = e.target.getAttribute("data-id");
    let quantity = e.target.getAttribute("data-quantity");
    let unit = e.target.getAttribute("data-unit");
    let newQuantity = parseInt(quantity) - 1;
    let newTotal = unit * newQuantity;
    let formData = new FormData();
    formData.append("id", id);
    formData.append("newQuantity", newQuantity);
    formData.append("newTotal", newTotal);

    axios
      .post(ApiURL.onSubtract, formData)
      .then((response) => {
        if (response.data == 1) {
          this.setState({ OnDeleteRefresh: true });
        }
      })
      .catch();
  };
  OnAddRefresh = () => {
    if (this.state.OnAddRefresh === true) {
      return;
    }
  };
  OnDeleteRefresh = () => {
    if (this.state.OnDeleteRefresh === true) {
      return;
    }
  };

  render() {
    let data = this.state.CartData;

    var items = data.map((data, i) => {
      return (
        <div>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                  <img className="w-100" height="auto" src={data.img} alt="" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <h5 className="details-section-title">{data.product_name}</h5>
                  <h6 className="section-sub-title">
                    Quantity: {data.product_quantity}
                  </h6>
                  <h6 className="section-sub-title">
                    Price= {data.product_quantity} X {data.unit_price} ={" "}
                    {data.total_price}
                  </h6>
                </Col>
                <Col className="mt-3" xl={3} lg={3} md={3} sm={12} xs={12}>
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <Row className="justify-content-center">
                        <Col lg={2} md={2} sm={2} xs={2}>
                          <Button
                            data-id={data.id}
                            data-quantity={data.product_quantity}
                            data-total={data.total_price}
                            data-unit={data.unit_price}
                            onClick={this.onAdd}
                          >
                            +
                          </Button>
                        </Col>
                        <Col lg={5} md={2} sm={2} xs={2}>
                          <input
                            value={data.product_quantity}
                            type="number"
                            className="form-control text-center"
                          />
                        </Col>
                        <Col className="p-0 m-0" lg={2} md={2} sm={2} xs={2}>
                          <Button
                            data-id={data.id}
                            data-quantity={data.product_quantity}
                            data-total={data.total_price}
                            data-unit={data.unit_price}
                            onClick={this.onSubtract}
                            className="btn btn-danger"
                          >
                            -
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Button
                    data-id={data.id}
                    onClick={this.onDelete}
                    className="btn btn-block mt-3 site-btn"
                  >
                    {" "}
                    <i className="fas fa-trash-alt"></i>Remove
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      );
    });
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
              <Row>
                <Col>
                  <Card>
                    <Card.Body className="cart-body-background">
                      <p className="cart-title">PRODUCT CART LIST</p>
                      <h5 className="cart-sub-title">
                        TOTAL PRICE: {this.state.CartTotalPrice}
                      </h5>
                      <h5 className="cart-sub-title">
                        TOTAL ITEM: {this.state.CartCount}
                      </h5>
                      <Link to="/order">
                        <Button className="cart-checkout-btn">
                          <i className="fas fa-shopping-cart "></i> CHECKOUT
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
              {items}
            </Col>
            {this.DeleteRefresh()}
            {this.OnAddRefresh()}
            {this.OnDeleteRefresh()}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CartList;
