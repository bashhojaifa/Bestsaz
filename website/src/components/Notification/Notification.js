import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card,Modal,Button} from "react-bootstrap";
import axios from 'axios';
import ApiURL from "../../api/ApiURL";

class Notification extends Component {
    constructor() {
        super();
        this.state={
            History:[],
            modal:false,
            title:"",
            message:"",
            date:""
        }
    }
    componentDidMount() {
        axios.get(ApiURL.notification_history).then(
            response=>{
                if(response.status == 200){
                   this.setState({History:response.data});
                }
            }
        ).catch(

        );
    }

    modalOpen=(event)=>{
            let title = event.target.getAttribute('data-title');
            let message = event.target.getAttribute('data-message');
            let date = event.target.getAttribute('data-date');
        this.setState({modal:true,title:title,message:message,date:date});
    }
    modalClose=()=>{
        this.setState({modal:false});
    }
    render() {
        let data = this.state.History;
        var MyData = data.map((MyData,i)=>{
            return(
                <Col className="mb-2" lg={3} md={3} sm={6} xs={12}>
                    <Card>
                        <Card.Body>
                            <h6 className="product-name-on-card"><i className="fas fa-bell"></i>{MyData.Title}</h6>
                            <small className="product-price-on-card">Date: {MyData.Date} | Status: unread</small>
                            <a className="d-flex justify-content-end" onClick={this.modalOpen} data-title={MyData.Title} data-message={MyData.Message} data-date={MyData.Date}>&#128065; </a>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });
        return (
            <Fragment>
                <Container fluid={true} className="TopSection onboardMargin mt-5 pt-5">
                    <Row>
                        {MyData}
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.modal}>
                    <Modal.Body className="p-5">
                        <h5 className="details-section-title">{this.state.title}</h5>
                        <p className="section-sub-title text-justify">{this.state.message}</p>
                    </Modal.Body>

                    <Modal.Footer className="justify-content-between">
                        <small>Date: {this.state.date}</small>
                        <Button onClick={this.modalClose} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Notification;