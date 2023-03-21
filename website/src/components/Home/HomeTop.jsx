//External Lib Import
import { Col, Container, Row } from "react-bootstrap";

//Internal Lib Import
import MegaMenuMobile from "./MegaMenuMobile";
import SliderHome from "./SliderHome";
import SliderLoader from "../Placeholder/SliderLoader";
import { useHomeSliderListQuery } from "../../redux/services/homeSliderService";

const HomeTop = () => {
  const { data: sliderList, isLoading } = useHomeSliderListQuery();

  if (isLoading) {
    return <SliderLoader />;
  }

  return (
    <>
      <Container className="p-0 TopSection overflow-hidden" fluid={true}>
        <Row className="p-0 m-0 overflow-hidden">
          <Col className="p-0 m-0 overflow-hidden" lg={3} md={3} sm={12}>
            <MegaMenuMobile />
          </Col>
          <Col className="p-0 m-0 overflow-hidden" lg={9} md={9} sm={12}>
            <SliderHome sliderList={sliderList} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeTop;
