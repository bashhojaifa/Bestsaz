//External Lib Import
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//Internal Lib Import
import { useSiteInfoListQuery } from "../../redux/services/siteInfoService";
import { htmlParserDom } from "../../utils/htmlParser";
import FooterPlaceholder from "../Placeholder/FooterPlaceholder";
import IsoStoreLogo from "../../assets/images/apple.png";
import playStoreLogo from "../../assets/images/google.png";

const FooterDesktop = () => {
  const { data: siteInfo } = useSiteInfoListQuery();

  if (siteInfo && !Object.entries(siteInfo).length > 0) {
    return <FooterPlaceholder />;
  }

  return (
    <div className="card mt-5">
      <Container fluid={true}>
        <Row className="px-0 mx-5 my-5">
          <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
            <h5 className="footer-menu-title">ABOUT COMPANY</h5>
            <p className="footer-link">
              {htmlParserDom(siteInfo?.aboutCompany)}
            </p>
            <h5 className="footer-menu-title text-justify">SOCIAL LINK</h5>

            {siteInfo?.socialLink?.map((social) => (
              <a href={social?.link}>
                <i className={social?.icon}></i>
              </a>
            ))}
          </Col>
          <Col className="p-2">
            <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
            <p className="footer-link">{htmlParserDom(siteInfo?.address)}</p>
            <br />
          </Col>
          <Col className="p-2">
            <h5 className="footer-menu-title">MORE INFO</h5>
            <Link to="/purchase" className="footer-link">
              How To Purchase
            </Link>
            <br />
            <Link to="/about" className="footer-link">
              About Us
            </Link>
            <br />
            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>
            <br />
            <Link to="/policy" className="footer-link">
              Privacy Policy
            </Link>
            <br />
            <Link to="/terms" className="footer-link">
              Terms & Conditions
            </Link>
            <br />
            <Link to="/refund" className="footer-link">
              Refund Policy
            </Link>
            <br />
          </Col>
          <Col className="p-2">
            <h5 className="footer-menu-title">DOWNLOAD OUR APPS</h5>
            <a target="_blank" href={siteInfo?.playStoreAppLink}>
              <img className="my-2" src={playStoreLogo} alt="ANDROID" />
            </a>
            <br />
            <a target="_blank" href={siteInfo?.appleStoreAppLink}>
              <img className="" src={IsoStoreLogo} alt="IOS" />
            </a>
            <p className="footer-menu-title mt-3">Change Language</p>
            <p className=" m-0 p-0 w-25" id="google_translate_element"></p>
          </Col>
        </Row>
        {/* <Row>
          <Col className="w-100 bg-dark ">
            <h5 className="footer-menu-title text-white my-2 pt-2">
              WE DELIVER IN
            </h5>
            <p className="text-white footer-text">
              {htmlParserDom(siteInfo?.deliveryNotice)}
            </p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default FooterDesktop;
