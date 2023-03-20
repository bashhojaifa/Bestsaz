import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import FeaturedProductLoader from "../Placeholder/FeaturedProductLoader";

class FeaturedProducts extends Component {


    constructor() {
        super();
        this.state = {
            featured_product_data: [],
            isLoading: "",
            MainDiv: "d-none"

        }
    }

    componentDidMount() {
        axios.get(ApiURL.featuredProducts).then(response => {
            if (response.status == 200) {
                this.setState({featured_product_data: response.data, isLoading:"d-none", MainDiv:""})
            }
        }).catch(error => {

        });
    }

    render() {
        let ParentList = this.state.featured_product_data;
        const MyList = ParentList.map((ParentList, i) => {
            if(ParentList.special_price == "NA"){
            return <Col className="p-1" key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Link to={"/productDetails/" + ParentList.product_code}>
                    <Card className="image-box  w-100 card">
                        <img className=""
                             src={ParentList.image}/>
                        <Card.Body>
                            <p className="product-name-on-card">{ParentList.title}</p>
                            <span><p
                                className="product-price-on-card">{ParentList.discount_price}</p></span>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            }
            else{
                return <Col className="p-1" key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to={"/productDetails/" + ParentList.product_code}>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src={ParentList.image}/>
                            <Card.Body>
                                <p className="product-name-on-card">{ParentList.title}</p>
                                <span><p
                                    className="product-price-on-card">{ParentList.discount_price}</p><strike>{ParentList.price}</strike></span>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            }
        });
        return (
            <Fragment>
                <FeaturedProductLoader isLoading={this.state.isLoading  } />
                <div className={this.state.MainDiv}>
                    <Container className="text-center" fluid={true}>
                        <h4 className="section-title">FEATURED PRODUCTS</h4>
                        <p className="section-sub-title">Some Of Our Exclusive Collection, You May Like</p>
                        <Row>
                            {MyList}
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default FeaturedProducts;