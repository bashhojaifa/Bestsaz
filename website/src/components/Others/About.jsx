//External Lib Import
import { Breadcrumb, Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//Internal Lib Import
import { useSiteInfoListQuery } from "../../redux/services/siteInfoService";
import { htmlParserDom } from "../../utils/htmlParser";
import SiteinfoPlaceholder from "../Placeholder/SiteinfoPlaceholder";

const About = () => {
  const { data: siteInfo } = useSiteInfoListQuery();

  if (siteInfo && Object.entries(siteInfo).length > 0) {
    return (
      <Container fluid={true} className="TopSection onboardMargin mt-5 pt-5">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={"/about"}>About</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row className="p-2">
          <Col className="mt-2" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <Card.Body>{htmlParserDom(siteInfo?.about)}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid={true} className="TopSection onboardMargin mt-5 pt-5">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={"/"}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/about"}>About</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row className="p-2">
        <SiteinfoPlaceholder />
      </Row>
    </Container>
  );
};

export default About;
