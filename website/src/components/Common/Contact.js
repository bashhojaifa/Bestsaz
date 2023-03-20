import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import UserOnboard from "./UserOnboard";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import validation from "../validation/validation";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {

    constructor() {
        super();
        this.state={
            name:"",
            phone:"",
            msg:"",
        }
    }
    nameOnChange=(event)=>{
        let name = event.target.value;
        this.setState({name:name});
    }
    mobileOnChange=(event)=>{
       let mobile =  event.target.value;
       this.setState({phone:mobile});
    }
    msgOnChange=(event)=>{
        let msg = event.target.value;
        this.setState({msg:msg});
    }
    formOnSubmit=(event)=>{
        let name = this.state.name;
        let phone = this.state.phone;
        let msg = this.state.msg;
        let sendBtn = document.getElementById('sendBtn');
        let contactForm = document.getElementById('contactForm');

        if(name.length == 0){
            toast.error("Name required!");
        }
        else if(phone.length == 0){
            toast.error("Phone required!!");
        }
       else if(!(validation.NameRegx).test(name)){
            toast.error("Invalid name");
        }
        else if(!(validation.MobileRegex).test(phone)){
            toast.error("Invalid phone");
        }
        else if(msg.length == 0 ){
            toast.error("Message can't be empty");
        }
        else{
            sendBtn.innerHTML="Sending...";
            let formData = new FormData();
            formData.append("name",name)
            formData.append("phone",phone)
            formData.append("msg",msg)

            axios.post(ApiURL.ContactDetails,formData).then(
                function(response){
                    if(response.status == 200 && response.data == 1){
                        toast.success("Message Sent!");
                        setTimeout(function (){
                            sendBtn.innerHTML="Send";
                        },3000);
                        contactForm.reset();
                    }

                    else{
                        toast.error("Message Failed to Sent!",{

                        });
                    }
                }
            ).catch(
                function(error){
                    toast.error('Data failed to insert!');
                }
            );

        }
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <Container className="TopSection onboardMargin">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" lg={6} md={6} xs={12} sm={12}>
                                    <Form id="contactForm" onSubmit={this.formOnSubmit} className="onboardForm">
                                        <h4 className="section-title ">SEND MESSAGE</h4>
                                        <h6 className="section-sub-title mb-5">Please Enter Your Message</h6>
                                        <input onChange={this.nameOnChange} className="form-control section-sub-title m-2" type="text" placeholder="Your Name"/>
                                        <input onChange={this.mobileOnChange} className="form-control section-sub-title m-2" type="text" placeholder="Your Mobile"/>
                                        <input onChange={this.msgOnChange} className="form-control section-sub-title m-2" type="text" placeholder="Your Message"/>
                                        <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn">Send</Button>
                                    </Form>
                                </Col>
                                <Col className="m-0 p-0 Desktop" md={6} lg={6} sm={12} xs={12}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117549.6233709877!2d91.23863089130211!3d22.971367267345016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375360a2471ecdbb%3A0x221d0e807490e57c!2sDaganbhuiyan%20Upazila!5e0!3m2!1sen!2sbd!4v1604510656208!5m2!1sen!2sbd"
                                        frameBorder="0" allowFullScreen="" width="100%" height="100%"
                                        aria-hidden="false" tabIndex="0"></iframe>                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <ToastContainer/>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;