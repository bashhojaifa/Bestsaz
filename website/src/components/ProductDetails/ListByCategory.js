import React, {Component, Fragment} from 'react';
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import SuggestedProducts from "./SuggestedProducts";

class ListByCategory extends Component {
    render() {
        let MyList = this.props.productData;
        let ProductList = MyList.map((MyList, i) => {
            if (MyList.special_price == "NA") {
                return <Col className="p-2" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Link to={"/productDetails/" + MyList.product_code}>
                        <Card className="image-box card">
                            <img className="w-100"
                                 src={MyList.image}/>
                            <Card.Body>
                                <p className="product-name-on-card">{MyList.subcategory}</p>
                                <p className="product-price-on-card">Special Price: {MyList.special_price}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

            } else {
                return <Col className="p-2" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Link to={"/productDetails/" + MyList.product_code}>
                        <Card className="image-box card">
                            <img className="w-100"
                                 src={MyList.image}/>
                            <Card.Body>
                                <p className="product-name-on-card">{MyList.subcategory}</p>
                                <p className="product-price-on-card">Before: <del>{MyList.price}</del></p>
                                <p className="product-price-on-card">Special Price: {MyList.discount_price}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            }
        });
        return (
            <Fragment>
                <div className="text-center TopSection onboardMargin mt-5 pt-5">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/ProductListByCategory/"+this.props.Category}>{this.props.Category}</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        {ProductList}
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default ListByCategory;