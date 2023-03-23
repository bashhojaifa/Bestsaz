//External Lib Import
import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//Internal Lib Import
import ProductItem from "../Product/ProductItem";

const Search = ({ searchTerm, productList }) => {
  return (
    <Container
      fluid={true}
      className="text-center TopSection onboardMargin mt-5 pt-5"
    >
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/search/" + searchTerm}>
            Search Result For: {searchTerm}
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        {productList?.map((product) => (
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
  );
};

export default Search;
