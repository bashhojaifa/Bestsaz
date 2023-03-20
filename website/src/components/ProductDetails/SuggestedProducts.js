import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import SliderLoader from "../Placeholder/SliderLoader";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Link} from "react-router-dom";

class SuggestedProducts extends Component {
    constructor() {
        super();

        this.state = {
            SuggestedProducts: [],
            isLoading: "",
            mainDiv: "d-none"
        }
    }

    componentDidMount() {
        let subcategory = this.props.subcategory;
        axios.get(ApiURL.SuggestedProducts(subcategory)).then(response => {
                if (response.status == 200) {
                    this.setState({SuggestedProducts: response.data, isLoading: "d-none", mainDiv: ""});
                }
            }
        ).catch(
            error => {

            }
        );
    }

    render() {
        let SuggestedProducts = this.state.SuggestedProducts;
        var data = SuggestedProducts.map((MyData, i) => {
            if (MyData.discount_price == "NA") {
                return (<Col className="mb-2" xl={3} lg={3} md={3} sm={6} xs={12}>
                        <Link to={"/productDetails/" + MyData.product_code}>
                            <Card className="image-box  w-100 card">
                                <img className=""
                                     src={MyData.image}/>
                                <Card.Body>
                                    <p className="product-name-on-card">{MyData.title}</p>
                                    <p className="product-price-on-card">Price: {MyData.price}</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                );
            } else {
                return (<Col className="mb-2" xl={2} lg={2} md={4} sm={3} xs={12}>
                        <Link to={"/productDetails/" + MyData.product_code}>
                            <Card className="image-box  w-100 card">
                                <img className=""
                                     src={MyData.image}/>
                                <Card.Body>
                                    <p className="product-name-on-card">{MyData.title}</p>
                                    <p className="product-price-on-card"><strike>Before: {MyData.price}</strike></p>
                                    <p className="product-price-on-card">After: {MyData.discount_price}</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                );
            }


        });
        return (
            <Fragment>
                <SliderLoader isLoading={this.state.isLoading}/>
                <div className={this.state.mainDiv}>
                    <Container fluid={true}>
                        <Row>
                            {data}
                        </Row>
                    </Container>
                </div>


            </Fragment>
        );
    }
}

export default SuggestedProducts;