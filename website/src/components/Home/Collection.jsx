//External Lib Import
import { Col, Container, Row } from "react-bootstrap";
import { useProductListRemarkQuery } from "../../redux/services/productService";

//Internal Lib Import
import SpecialCollectionPlaceholder from "../Placeholder/SpecialCollectionPlaceholder";
import ProductItem from "../Product/ProductItem";

const Collection = () => {
  const { data: productList } = useProductListRemarkQuery("special");

  if (!productList?.length > 0) {
    return <SpecialCollectionPlaceholder />;
  }

  return (
    <Container className="text-center card" fluid={true}>
      <h4 className="section-title">SPECIAL COLLECTION</h4>
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

export default Collection;
