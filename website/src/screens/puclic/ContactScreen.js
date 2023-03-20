import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../../components/Common/NavMenuDesktop";
import NavMenuMobile from "../../components/Common/NavMenuMobile";
import UserOnboard from "../../components/Common/UserOnboard";
import FooterDesktop from "../../components/Common/FooterDesktop";
import FooterMobile from "../../components/Common/FooterMobile";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Contact from "../../components/Common/Contact";

class ContactScreen extends Component {
  componentDidMount() {
    window.scroll(0, 0);
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

        <Contact />

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

export default ContactScreen;
