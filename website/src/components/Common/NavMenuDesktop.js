import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import SessionHelper from "../SessionHelper/SessionHelper";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class NavMenuDesktop extends Component {
  constructor() {
    window.scroll(0, 0);
    super();
    this.state = {
      searchItem: "",
      readyToRedirect: false,
      placeholder: "",
      onLogoutRedirect: false,
      items: "",
    };
    this.onChanges = this.onChanges.bind(this);
    this.onClicks = this.onClicks.bind(this);
    this.onRedirects = this.onRedirects.bind(this);
    this.onLogoutRedirect = this.onLogoutRedirect.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  componentDidMount() {
    axios
      .get(ApiURL.CountPriceItem(SessionHelper.getSession("phone")))
      .then((response) => {
        if (response.status == 200) {
          this.setState({ items: response.data });
        }
      })
      .catch();
  }

  onChanges(event) {
    var val = event.target.value;
    this.setState({ searchItem: val });
  }

  onClicks() {
    if (this.state.searchItem.length >= 2) {
      this.setState({ readyToRedirect: true });
    } else {
      this.setState({ placeholder: "Search Your Product!" });
    }
  }

  onRedirects() {
    if (this.state.readyToRedirect == true) {
    }
  }
  onLogout() {
    this.setState({ onLogoutRedirect: true });
    SessionHelper.removeSession("phone");
  }
  onLogoutRedirect() {
    if (this.state.onLogoutRedirect === true) {
    }
  }
  render() {
    if (SessionHelper.getSession("phone")) {
      return (
        <Fragment>
          <Navbar fixed={"top"} bg="light" className="p-2">
            <Row className="w-100">
              <Col className="p-1" sm={4} md={4} sm={12} xs={12}>
                <Link to={"/"}>
                  <a className="btn">
                    <img
                      className="nav-logo"
                      src="https://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"
                      alt=""
                    />
                  </a>
                </Link>
                <Link to="/cart">
                  <Button className="cart-btn">
                    <i className="fa fa-shopping-cart"></i> {this.state.items}
                    &nbsp;items
                  </Button>
                </Link>
              </Col>
              <Col className="p-1" sm={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input
                    onChange={this.onChanges}
                    type="text"
                    className="form-control"
                    placeholder={this.state.placeholder}
                    aria-label="Text input with segmented dropdown button"
                  />
                  <button
                    type="button"
                    className="btn site-btn"
                    onClick={this.onClicks}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </Col>
              <Col className="p-1" sm={4} md={4} sm={12} xs={12}>
                {/*<Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i> <sup><span*/}
                {/*    className="badge text-white bg-danger">3</span></sup></Link>*/}
                <Link to="/notification" className="btn">
                  <i className="fa h4  fa-bell"></i>{" "}
                  <sup>
                    <span className="badge text-white bg-danger">4</span>
                  </sup>
                </Link>
                <Dropdown className="d-inline-flex float-right mr-5">
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    Account
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to={"/"}>Favorite</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to={"/"}>Wishlist</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to={"/"}>Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link onClick={this.onLogout}>Logout</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            {this.onRedirects()}
            {this.onLogoutRedirect()}
          </Navbar>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Navbar fixed={"top"} bg="light" className="p-2">
            <Row className="w-100">
              <Col className="p-1" sm={4} md={4} sm={12} xs={12}>
                <Link to={"/"}>
                  <a className="btn">
                    <img
                      className="nav-logo"
                      src="https://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"
                      alt=""
                    />
                  </a>
                </Link>
              </Col>
              <Col className="p-1" sm={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input
                    placeholder={this.state.placeholder}
                    onChange={this.onChanges}
                    type="text"
                    className="form-control"
                    aria-label="Text input with segmented dropdown button"
                  />
                  <button
                    type="button"
                    onClick={this.onClicks}
                    className="btn site-btn"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </Col>
              <Col className="p-1" sm={4} md={4} sm={12} xs={12}>
                <Link to="/favourite" className="btn">
                  <i className="fa h4 fa-heart"></i>{" "}
                  <sup>
                    <span className="badge text-white bg-danger">3</span>
                  </sup>
                </Link>
                <Link to="/notification" className="btn">
                  <i className="fa h4  fa-bell"></i>{" "}
                  <sup>
                    <span className="badge text-white bg-danger">4</span>
                  </sup>
                </Link>
                <a className="btn">
                  <i className="fa h4 fa-mobile-alt"></i>{" "}
                </a>
                <Link to="/onboard" className="h4 btn">
                  LOGIN
                </Link>
              </Col>
              {this.onRedirects()}
            </Row>
          </Navbar>
        </Fragment>
      );
    }
  }
}

export default NavMenuDesktop;
