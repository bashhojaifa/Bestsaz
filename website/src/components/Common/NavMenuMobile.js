import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import MegaMenuMobile from "../Home/MegaMenuMobile";
import {Link} from "react-router-dom";

class NavMenuMobile extends Component {
    constructor() {
        super();
        this.state = {
            SideNavState: "sideNavClose",
            ContentOverState: "ContentOverlayClose",

        }
    }

    MenuBarClickHandler = () => {
        this.SideNavOpenClose();
    }
    ContentOverlayClickHandler = () => {
        this.SideNavOpenClose();
    }
    SideNavOpenClose = () => {
        let SideNavState = this.state.SideNavState;
        if (SideNavState === "sideNavOpen") {
            this.setState({SideNavState: "sideNavClose"})
            this.setState({ContentOverState: "ContentOverlayClose"})
        } else if (SideNavState === "sideNavClose") {
            this.setState({SideNavState: "sideNavOpen"})
            this.setState({ContentOverState: "ContentOverlayOpen"})
        }
    }

    render() {
        return (
            <Fragment>
                <Navbar fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Button onClick={this.MenuBarClickHandler} className="h4 MobileNavToggler"><i className="fa fa-bars"></i></Button>
                    <Link to="/cart"><Button className="cart-btn mx-1 h4"><i className="fa fa-shopping-cart"></i> 4 items</Button></Link>
                    <Link className="btn" to="/favourite"><i className="fa h4 fa-heart"></i> <sup><span className="badge text-white bg-danger">3</span></sup></Link>
                    <Link className="btn" to="/notification"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                    <Link to="/search" className="bg-white text-dark h4 border-white"><i className="fas fa-search"></i></Link>
                </Navbar>
                <div className={this.state.SideNavState}>
                    <MegaMenuMobile/>
                </div>
                <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>
                </div>
            </Fragment>

        );
    }
}

export default NavMenuMobile;