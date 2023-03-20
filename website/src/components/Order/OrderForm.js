import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Card} from "react-bootstrap";

class OrderForm extends Component {
    render() {
        return (
            <Fragment>
                <Container className="onboardMargin">
                    <Card>
                        <Card.Body>

                    <Row className="mt-5">
                        <Col className="mt-5" lg={6} xl={6} md={6} sm={12} xs={12}>
                            <Row>
                                <Col lg={12} xl={12} md={12} sm={12} xs={12} >
                                    <Row className="">
                                        <Col lg={12} xl={12} md={12} sm={12} xs={12} className="d-flex mb-5">
                                            <input className="form-control m-1" type="text" placeholder="First Name"/>
                                            <input className="form-control m-1" type="text" placeholder="Last Name"/>
                                        </Col>
                                        <Col lg={12} xl={12} md={12} sm={12} xs={12} className="mb-5">
                                            <input type="text" className="form-control mb-2" placeholder="Street Address"/>
                                            <input type="text" className="form-control mb-2"
                                                   placeholder="Street Address Line 2"/>
                                        </Col>
                                        <Col lg={12} xl={12} md={12} sm={12} xs={12} className="d-flex mb-5">
                                            <input className="form-control my-2 m-1" type="text" placeholder="Postal Code"/>
                                            <input className="form-control my-2 m-1" type="text" placeholder="Region"/>
                                        </Col>
                                        <Col lg={12} xl={12} md={12} sm={12} xs={12}>
                                            <input className="form-control my-2" type="text" placeholder="Phone Number"/>
                                            <input className="form-control my-2" type="text" placeholder="Email"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="m-auto"  lg={6} xl={6} md={6} sm={12} xs={12}>
                            <textarea className="form-control mt-5" name="" id="" cols="" rows="17" placeholder="Your Message"></textarea>
                        </Col>
                        <Col className="mt-5" lg={12} xl={12} md={12} sm={12} xs={12}>
                            <Button className="btn-block btn-primary form-control"><i className="fas fa-car" ></i> ORDER NOW</Button>
                        </Col>
                    </Row>
                        </Card.Body>
                    </Card>
                </Container>

            </Fragment>
        );
    }
}

export default OrderForm;