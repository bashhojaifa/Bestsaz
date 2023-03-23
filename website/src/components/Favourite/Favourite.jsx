//External Lib Import
import { Container, Row, Col } from "react-bootstrap";

//Internal Lib Import
import { WishItem } from "../Product/ProductItem";

const Favourite = ({ wishList }) => {
  return (
    <Container className="text-center pt-5" fluid={true}>
      <div className="section-title text-center mb-55">
        <h2> MY FAVOURITE ITEMS</h2>
        <p>Some Of Our Exclusive Collection, You May Like</p>
      </div>

      <Row>
        {wishList?.map((wishItem) => (
          <Col
            className="p-2"
            key={wishItem?._id}
            xl={3}
            lg={3}
            md={3}
            sm={6}
            xs={6}
          >
            <WishItem wishItem={wishItem} />
          </Col>
        ))}

        {!wishList?.length > 0 && (
          <Col className="p-2">
            <h3>Favourite Item Not Found</h3>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Favourite;
