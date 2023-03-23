//External Lib Import
import { useState } from "react";
import { Navbar, Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

//Internal Lib Import
import MegaMenuMobile from "../Home/MegaMenuMobile";

const UserOnboard = () => {
  const [state, setState] = useState({
    phone: "",
    readyToRedirect: false,
    placeholder: "",
    color: "text-danger",
    //hasProduct: SessionHelper.getSession("productCode"),
  });

  const onChange = (event) => {
    // this.setState({ phone: event.target.value });
  };
  const onClick = () => {
    // if (this.state.phone.length == 11) {
    //   this.setState({ readyToRedirect: true });
    // } else if (this.state.phone.length > 11 || this.state.phone.length < 11) {
    //   this.setState({ placeholder: "Number Should Be 11 Digits Long!" });
    // }
  };
  const onRedirect = () => {
    // if (this.state.readyToRedirect === true) {
    //   SessionHelper.setSession("phone", this.state.phone);
    //   return;
    // }
  };

  return (
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
                  onChange={onChange}
                  className="form-control section-sub-title m-2"
                  type="text"
                  placeholder={state.placeholder}
                />
                <Button
                  onClick={onClick}
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
          {onRedirect()}
        </Col>
      </Row>
    </Container>
  );
};

export default UserOnboard;
