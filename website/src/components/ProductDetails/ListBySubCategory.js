import React, {Component, Fragment} from 'react';
import axios from 'axios';
import ApiURL from "../../api/ApiURL";
import {Breadcrumb, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class ListBySubCategory extends Component {
    constructor() {
        super();
        this.state = {
            DataList: [],
        }
    }

    render() {
        let MyData = this.props.productData;
        let SubCategory = MyData.map((MyData, i) => {
            if (MyData.special_price == "NA") {
                return <Col className="p-2"
                            key={i.toString()} xl={3} lg={3}
                            md={3} sm={6} xs={6}><Link to={"/productDetails/" + MyData.product_code}>
                    <Card className="image-box card">
                        <img className="w-100"
                             src={MyData.image}/>
                        <Card.Body>
                            <p className="product-name-on-card">{MyData.subcategory}</p>
                            <p className="product-price-on-card">Before: <del>{MyData.price}</del></p>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>

            } else {
                return <Col className="p-2"
                            key={i.toString()} xl={3} lg={3}
                            md={3} sm={6} xs={6}>
                    <Link to={"/productDetails/" + MyData.product_code}>
                    <Card className="image-box card">
                        <img className="w-100"
                             src={MyData.image}/>
                        <Card.Body>
                            <p className="product-name-on-card">{MyData.subcategory}</p>
                            <p className="product-price-on-card">Before: <del>{MyData.price}</del></p>
                            <p className="product-price-on-card">Special Price: {MyData.discount_price}</p>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>

            }
        });


        return (
            <Fragment>
                <div className="text-center TopSection onboardMargin">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/ProductListByCategory/"+this.props.Category}>{this.props.Category}</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/ProductListBySubCategory/"+this.props.Category}>{this.props.SubCategory}</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        {SubCategory}
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default ListBySubCategory;