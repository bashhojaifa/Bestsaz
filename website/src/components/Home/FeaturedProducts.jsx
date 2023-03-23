//External Lib Import
import { Col, Container, Row } from "react-bootstrap";

//Internal Lib Import
import FeaturedProductLoader from "../Placeholder/FeaturedProductLoader";
import ProductItem from "../Product/ProductItem";
import { useProductListRemarkQuery } from "../../redux/services/productService";

const FeaturedProducts = () => {
  const { data: productList } = useProductListRemarkQuery("featured");

  if (!productList?.length > 0) {
    return <FeaturedProductLoader />;
  }

  return (
    <Container className="text-center" fluid={true}>
      <h4 className="section-title">FEATURED PRODUCTS</h4>
      <p className="section-sub-title">
        Some Of Our Exclusive Collection, You May Like
      </p>
      <Row>
        {productList?.map((product) => (
          <Col
            className="p-2"
            key={product?.productCode}
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

export default FeaturedProducts;
