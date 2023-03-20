import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";

// import SliderHome from "./SliderHome";

class HomeTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="p-0 mt-5 overflow-hidden">
                    <Row>
                        <Col lg={9} md={9} sm={12}>
                            {/*<SliderHome/>*/}
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default HomeTop;