//External Lib Import
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Internal Lib Import
import MohammadSujon from "../../assets/images/developer-sujon.png";

const UserOnboard = () => {
  return (
    <div className="TopSection onboardMargin">
      <div className="section-title text-center mb-55">
        <h2>User Profile Page</h2>
      </div>

      <Container>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={MohammadSujon}
                className="userprofile"
              />

              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Link className="text-link" to="/orderlist">
                    <p className="product-name-on-card"> Order List </p>
                  </Link>
                </ListGroupItem>

                <ListGroupItem>
                  <Link className="text-link" to="/orderlist">
                    <p className="product-name-on-card"> Order List </p>
                  </Link>
                </ListGroupItem>

                <ListGroupItem>
                  <Link className="text-link" to="/orderlist">
                    <p className="product-name-on-card"> Order List </p>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>

          <Col lg={8} md={8} sm={12}>
            <ul className="list-group">
              <li className="list-group-item">Name : sdf </li>
              <li className="list-group-item">Email : sf</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserOnboard;
