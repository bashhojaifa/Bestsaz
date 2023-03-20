import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "html-react-parser";

class FooterDesktop extends Component {
  constructor() {
    super();
    this.state = {
      footerData: "",
      androidLink: "",
      iosLink: "",
      facebookLink: "",
      twitterLink: "",
      instagramLink: "",
      address: "",
      about_company: "",
      deliveryNotice: "",
      loaderDiv: true,
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    let GetSiteInfoFooter = sessionStorage.getItem("SiteInfoFooter");
    if (GetSiteInfoFooter == null) {
      axios
        .get(ApiURL.SendSiteInfo)
        .then((response) => {
          if (response.status == 200) {
            let responseData = response.data;
            let SetSiteInfoFooter = responseData[0];
            sessionStorage.setItem(
              "SiteInfoFooter",
              JSON.stringify(SetSiteInfoFooter)
            );
            this.setState({
              androidLink: SetSiteInfoFooter["android_app_link"],
              iosLink: SetSiteInfoFooter["ios_app_link"],
              facebookLink: SetSiteInfoFooter["facebook_link"],
              twitterLink: SetSiteInfoFooter["twitter_link"],
              instagramLink: SetSiteInfoFooter["instagram_link"],
              address: SetSiteInfoFooter["address"],
              about_company: SetSiteInfoFooter["about_company"],
              deliveryNotice: SetSiteInfoFooter["delivery_notice"],
              loaderDiv: "d-none",
              mainDiv: "",
            });
          }
        })
        .catch((error) => {});
    } else {
      let FooterDataJson = JSON.parse(GetSiteInfoFooter);
      this.setState({
        footerData: GetSiteInfoFooter,
        androidLink: FooterDataJson["android_app_link"],
        iosLink: FooterDataJson["ios_app_link"],
        facebookLink: FooterDataJson["facebook_link"],
        twitterLink: FooterDataJson["twitter_link"],
        instagramLink: FooterDataJson["instagram_link"],
        address: FooterDataJson["address"],
        about_company: FooterDataJson["about_company"],
        deliveryNotice: FooterDataJson["delivery_notice"],
        loaderDiv: "d-none",
        mainDiv: "",
      });
    }
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.mainDiv}>
          <div className="card mt-5">
            <Container fluid={true}>
              <Row className="px-0 mx-5 my-5">
                <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                  <h5 className="footer-menu-title">ABOUT COMPANY</h5>
                  <p className="footer-link">
                    {ReactHtmlParser(this.state.address)}
                  </p>
                  <h5 className="footer-menu-title text-justify">
                    SOCIAL LINK
                  </h5>
                  <a href={this.state.facebookLink}>
                    <i className="fab m-1 h4 fa-facebook"></i>
                  </a>
                  <a href={this.state.instagramLink}>
                    <i className="fab m-1 h4 fa-instagram"></i>
                  </a>
                  <a href={this.state.twitterLink}>
                    <i className="fab m-1 h4 fa-twitter"></i>
                  </a>
                </Col>
                <Col className="p-2">
                  <h5 className="footer-menu-title">THE COMPANY</h5>
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                  <br />
                  <Link to="/contact" className="footer-link">
                    Contact Us
                  </Link>
                  <br />
                  <a className="footer-link">Our Team</a>
                  <br />
                  <br />

                  <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                  <p className="footer-link">
                    {ReactHtmlParser(this.state.address)}
                  </p>
                  <br />
                </Col>
                <Col className="p-2">
                  <h5 className="footer-menu-title">MORE INFO</h5>
                  <Link to="/purchase" className="footer-link">
                    How To Purchase
                  </Link>
                  <br />
                  <Link to="/policy" className="footer-link">
                    Privacy Policy
                  </Link>
                  <br />
                  <Link to="/refund" className="footer-link">
                    Refund Policy
                  </Link>
                  <br />
                </Col>
                <Col className="p-2">
                  <h5 className="footer-menu-title">DOWNLOAD OUR APPS</h5>
                  <a target="_blank" href={this.state.iosLink}>
                    <img
                      className="my-2"
                      src="Images/Android.png"
                      alt="ANDROID"
                    />
                  </a>
                  <br />
                  <a target="_blank" href={this.state.androidLink}>
                    <img
                      className="h-25 w-25"
                      src="Images/Apple.png"
                      alt="IOS"
                    />
                  </a>
                  <p className="footer-menu-title mt-3">Change Language</p>
                  <p
                    className=" m-0 p-0 w-25"
                    id="google_translate_element"
                  ></p>
                </Col>
              </Row>
              <Row>
                <Col className="w-100 bg-dark ">
                  <h5 className="footer-menu-title text-white my-2 pt-2">
                    WE DELIVER IN
                  </h5>
                  <p className="text-white footer-text">
                    {ReactHtmlParser(this.state.deliveryNotice)}
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className={this.state.loaderDiv}>
          <Card>
            <Card.Body>
              <div className="ph-item">
                <div className="ph-col-12">
                  <div className="ph-row">
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default FooterDesktop;
