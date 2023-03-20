import React, {Component, Fragment} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class Search extends Component {
    render() {
        let MyList = this.props.Products;
        let category = this.props.params;
        let ProductList;
        if(!MyList.length){
           return <Fragment>
                <div className="text-center TopSection onboardMargin mt-5 pt-5">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/Search/"+category}>Search Result For: {category}</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="justify-content-center">
                        <h1 className="text-secondary mt-5">No Data Found!</h1>
                    </Row>
                </div>
            </Fragment>
        }else{
             ProductList = MyList.map((ParentList, i) => {
                if(MyList.discount_price == "NA") {
                    return <Col className="p-2" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Link to={"/productDetails/" + ParentList.product_code}>
                            <Card className="image-box  w-100 card">
                                <img
                                    src={ParentList.image}/>
                                <Card.Body>
                                    <p className="product-name-on-card">{ParentList.title}</p>
                                    <span><p className="product-price-on-card"><strong>Price: {ParentList.price} TK</strong></p></span>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                }
                else{
                    return <Col className="p-2" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Link to={"/productDetails/" + ParentList.product_code}>
                            <Card className="image-box  w-100 card">
                                <img className=""
                                     src={ParentList.image}/>
                                <Card.Body>
                                    <p className="product-name-on-card">{ParentList.title}</p>
                                    <span><p className="product-price-on-card"><strike><strong>Before: {ParentList.discount_price} TK</strong></strike></p><strong>After: {ParentList.price} TK</strong></span>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                }
            });
        }

        return (
            <Fragment>
                <div className="text-center TopSection onboardMargin mt-5 pt-5">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/Search/"+category}>Search Result For: {category}</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        {ProductList}
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default Search;