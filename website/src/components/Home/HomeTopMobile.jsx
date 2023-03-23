//External Lib Import
import { Col, Container, Row } from "react-bootstrap";

//Internal Lib Import
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
      <Container fluid={true} className="p-0 mt-5 overflow-hidden">
        <Row>
          <Col lg={9} md={9} sm={12}>
            <SliderHome sliderList={sliderList} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeTop;
