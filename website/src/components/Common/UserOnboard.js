import React, { Component, Fragment } from "react";
import NavMenuDesktop from "./NavMenuDesktop";
import HomeTop from "../Home/HomeTop";
import NavMenuMobile from "./NavMenuMobile";
import HomeTopMobile from "../Home/HomeTopMobile";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import SessionHelper from "../SessionHelper/SessionHelper";

class UserOnboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      readyToRedirect: false,
      placeholder: "",
      color: "text-danger",
      hasProduct: SessionHelper.getSession("productCode"),
    };
  }

  onChange = (event) => {
    this.setState({ phone: event.target.value });
  };
  onClick = () => {
    if (this.state.phone.length == 11) {
      this.setState({ readyToRedirect: true });
    } else if (this.state.phone.length > 11 || this.state.phone.length < 11) {
      this.setState({ placeholder: "Number Should Be 11 Digits Long!" });
    }
  };
  onRedirect = () => {
    if (this.state.readyToRedirect === true) {
      SessionHelper.setSession("phone", this.state.phone);
      return;
    }
  };

  render() {
    return (
      <Fragment>
        <Container className="TopSection onboardMargin">
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center my-5"
                  lg={6}
                  md={6}
                  xs={12}
                  sm={12}
                >
                  <Form className="onboardForm ">
                    <h4 className="section-title my-3">USER SIGN IN</h4>
                    <h6 className="section-sub-title mb-5">
                      Please Enter Your Mobile No, And Go Next
                    </h6>
                    <input
                      id="inp"
                      onChange={this.onChange}
                      className="form-control section-sub-title m-2"
                      type="text"
                      placeholder={this.state.placeholder}
                    />
                    <Button
                      onClick={this.onClick}
                      className="btn btn-block m-2 site-btn"
                    >
                      Next
                    </Button>
                  </Form>
                </Col>
                <Col className="m-0 Desktop" md={6} lg={6} sm={12} xs={12}>
                  <img
                    src="https://register.wyfegypt.com/images/form-wizard-login.jpg"
                    alt=""
                  />
                </Col>
              </Row>
              {this.onRedirect()}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default UserOnboard;
