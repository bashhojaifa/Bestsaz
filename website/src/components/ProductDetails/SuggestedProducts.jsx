//External Lib Import
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//Internal Lib Import
import ProductItem from "../Product/ProductItem";
import { useSuggestedProductsQuery } from "../../redux/services/productService";
import SliderLoader from "../Placeholder/SliderLoader";

const SuggestedProducts = ({ subCategory }) => {
  const { data: suggestedList } = useSuggestedProductsQuery(subCategory);

  if (!suggestedList?.length > 0) {
    return <SliderLoader />;
  }

  return (
    <>
      <Container fluid={true}>
        <Row>
          {suggestedList?.map((product) => (
            <Col
              className="p-2"
              key={product?._id}
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
            >
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SuggestedProducts;
