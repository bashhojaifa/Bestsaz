//External Lib Import
import { Col, Container, Row, Card, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

//Internal Lib Import
import { htmlParserDom } from "../../utils/htmlParser";
import NotificationPlaceholder from "../Placeholder/NotificationPlaceholder";
import { useNotificationListQuery } from "../../redux/services/notificationService";
import DateFormatter from "../../utils/DateFormatter";

const Notification = () => {
  //   const [modalObj, setModalObj] = useState({
  //     modal: false,
  //     title: "",
  //     message: "",
  //     date: "",
  //   });

  const { data: notificationList } = useNotificationListQuery();

  //   const modalOpen = (event) => {
  //     let title = event.target.getAttribute("data-title");
  //     let message = event.target.getAttribute("data-message");
  //     let date = event.target.getAttribute("data-date");
  //     setModalObj({ ...modalObj, modal: true, title, message, date });
  //   };

  //   const modalClose = () => {
  //     setModalObj({ ...modalObj, modal: false });
  //   };

  if (!notificationList?.length > 0) {
    return (
      <Container fluid={true} className="TopSection onboardMargin mt-5 pt-5">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={"/notification"}>Notification</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row className="p-2">
          <NotificationPlaceholder />
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container fluid={true} className="TopSection onboardMargin mt-5 pt-5">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={"/notification"}>Notification</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          {notificationList?.map((notification, i) => (
            <Col className="mb-2" sm={12}>
              <Card>
                <Card.Body>
                  <h6 className="product-name-on-card">
                    <i className="fas fa-bell"></i> &nbsp;
                    {htmlParserDom(notification?.title)}
                  </h6>
                  <small className="product-price-on-card">
                    Date: {DateFormatter(notification.createdAt)}
                    {/* | Status:  unread */}
                  </small>
                  <p className="section-sub-title text-justify">
                    {htmlParserDom(notification?.message)}
                  </p>
                  <a
                    className="d-flex justify-content-end"
                    // onClick={modalOpen}
                    data-title={notification.title}
                    data-message={notification.message}
                    data-date={notification.createdAt}
                  >
                    {/* &#128065;{" "} */}
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* <Modal size="lg" show={modalObj.modal}>
        <Modal.Body className="p-5">
          <h5 className="details-section-title">{modalObj.title}</h5>
          <p className="section-sub-title text-justify">{modalObj.message}</p>
        </Modal.Body>

        <Modal.Footer className="justify-content-between">
          <small>Date: {modalObj.date}</small>
          <Button onClick={modalClose} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default Notification;
